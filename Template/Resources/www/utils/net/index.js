/*
 * @Author: SHEN
 * @Date: 2019-03-04 09:08:32
 * @Last Modified by: SHEN
 * @Last Modified time: 2019-05-08 10:23:24
 */
import Light from 'light'
import Qs from 'qs'
import { store, keys } from '@utils/store'
import { navigateTo } from '@utils/bridge.js'
var stream = Light.requireModule('stream')
var modal = Light.requireModule('modal')

let fnames = {
  checkToken: 'common/checkToken.json',
  login: 'common/login.json',
  moduleQuery: 'module/query.json',
  logout: 'common/logout.json'
}

/**
 * https://document.lightyy.com/light_ui_ref/content/JSNative-references/module/stream.html
 */
let net = {
  commPath: '/zgj-frame-web/',
  /**
   * 拼接 url
   * @param {*} fname 功能号
   * @param {*} callback 回调
   */
  getUrl(fname, callback) {
    store.readData(keys.kServer, 'O32').then(res => {
      if (res.info.error_code === '0') {
        let server = res.data.result
        let url = server + this.commPath + fname
        callback(url)
      } else {
        modal.toast({ message: '服务器地址未设置' })
        callback(null)
      }
    })
  },
  getToken(callback) {
    store.readData(keys.kToken, 'O32').then(res => {
      if (res.info.error_code === '0') {
        callback(res.data.result)
      } else {
        callback(null)
      }
    })
  },
  request(fname, { data = {}, headers = {}, method = 'POST', timeout = 30000 }, completeBlock = null, failedBlock = null) {
    headers = Object.assign({
      'X-Requested-With': 'XMLHttpRequest',
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
    }, headers)

    let start = (url) => {
      console.log('请求URL：', url, '请求参数：', data)
      stream.fetch({
        method: method,
        url: url,
        timeout: timeout,
        type: 'json',
        headers: headers,
        body: Qs.stringify(data)
      }, (result) => {
        // 处理接口状态码为非200情况
        if (result.status !== 200) {
          if (result.status === 404) {
            failedBlock && failedBlock(`${fname} \n接口未开放`)
          } else {
            failedBlock && failedBlock(result.statusText)
          }
        } else {
          let data = result.data
          // 处理接口请求业务错误码为非0的情况
          if (data.errCode !== '0') {
            // 处理令牌无效问题，跳转到登陆页面
            if (data.errCode === '-1' || data.errCode === '2010') {
              store.clearWhenLogout().then(res => {
                navigateTo('login/index', { replace: true, animationType: 'bottom' })
              })
            }
            modal.toast({ message: data.errMsg })
            completeBlock && completeBlock(result.data, false)
          } else {
            // 正确返回数据
            completeBlock && completeBlock(result.data, true)
          }
        }
      }, (response) => {
      })
    }
    this.getUrl(fname, url => {
      this.getToken(token => {
        token && Object.assign(data, { tokenKey: token })
        start(url)
      })
    })
  }
}

export { net, fnames }
