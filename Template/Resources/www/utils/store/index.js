/*
 * @Author: SHEN
 * @Date: 2019-03-06 16:40:40
 * @Last Modified by: SHEN
 * @Last Modified time: 2019-04-23 15:02:50
 */
import Light from 'light'
import LightSDK from 'light-sdk'
import keys from './keys'
const storage = Light.requireModule('storage')

let store = {
  setItem(key, value) {
    return new Promise((resolve, reject) => {
      if (['string', 'number'].indexOf(typeof (value)) < 0) {
        reject(new Error('value must a string or number!'))
      }
      storage.setItem(key, value, (event) => {
        resolve(true)
      })
    })
  },
  getItem(key) {
    return new Promise((resolve) => {
      storage.getItem(key, (event) => {
        resolve(event.data)
      })
    })
  },
  removeItem(key) {
    return new Promise((resolve) => {
      storage.removeItem(key, (event) => {
        resolve(event.data)
      })
    })
  },
  removeAll() {
    let promises = []
    for (let key of Object.keys(keys)) {
      promises.push(this.removeItem(keys[key]))
    }
    return Promise.all(promises)
  },
  /**
   * [{
   *    key: 'token',
   *    value: 'xxx',
   *    scope: 'O32'
   * }]
   */
  writeData(datas) {
    let ps = []
    datas.map((item) => {
      let p = new Promise((resolve) => {
        LightSDK.native.writeData({
          key: item.key,
          value: item.value,
          scope: item.scope
        }, resolve)
      })
      ps.push(p)
    })
    return Promise.all(ps)
  },
  /**
   * 返回格式：
   * {info: {error_code '0', error_message: 'success'}, data: {result: 'xxx'}}
   *
   * 无法找到返回：
   * {info: {error_code: '10003', error_message: 'xxxx'}}
   */
  readData(key, scope) {
    return new Promise((resolve) => {
      LightSDK.native.readData({ key: key, scope: scope }, resolve)
    })
  },
  /**
   * 读取本地一些数据
   * @param {*} params [{key, scope} ...]
   */
  readDatas(params) {
    console.log('params ===', params)
    let ps = []
    params.map(item => {
      let p = this.readData(item.key, item.scope)
      ps.push(p)
    })
    return Promise.all(ps)
  },
  /**
   * [{
   *    key: 'token',
   *    scope: 'O32'
   * }]
   */
  clearData(datas) {
    let ps = []
    datas.map((item) => {
      let p = new Promise((resolve) => {
        LightSDK.native.deleteData({
          key: item.key,
          scope: item.scope
        }, resolve)
      })
      ps.push(p)
    })
    return Promise.all(ps)
  },
  /** 以下为业务操作 */
  /**
   * 登出的时候进行本地数据清除
   */
  clearWhenLogout() {
    let datas = []
    let whiteList = [keys.kServer, keys.kOperatorNo]
    Object.keys(keys).map(key => {
      if (whiteList.indexOf(keys[key]) < 0) {
        datas.push({ key: keys[key], scope: 'O32' })
      }
    })
    return this.clearData(datas)
  }
}

export {
  store,
  keys
}
