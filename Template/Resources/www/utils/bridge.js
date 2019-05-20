/*
 * @Author: SHEN
 * @Date: 2019-03-01 13:56:39
 * @Last Modified by: SHEN
 * @Last Modified time: 2019-05-05 18:24:16
 */
import Light from 'light'
import LightSDK from 'light-sdk'
import { store, keys } from '@utils/store'
import { isEmpty, jsonParse } from '@utils/func'
import timeoutTool from '@utils/timeoutTool'
var navigator = Light.requireModule('navigator')
var modal = Light.requireModule('modal')

// https://document.lightyy.com/light_frame_ref/content/navigate.html
function navigateTo(url, {
  params = {},
  navBarType = 0,
  replace = false,
  navBarStyle = '{"backgroundColor": "#4277eb"}',
  remote = true, // 是否为远端加载
  jsn = false, // 是否为 jsn 模块
  title = ''
} = {}) {
  store.readData(keys.kToken, 'O32').then(res => {
    if (res.info.error_code !== '0' && (url !== 'login/index')) {
      modal.toast({ message: '未登陆' })
      Light.navigate('login/index', params, {
        title: title,
        navBarType: navBarType,
        navBarStyle: navBarStyle,
        replace: true
      })
    } else {
      if (!jsn) {
        Light.navigate(url, params, {
          title: title,
          navBarType: navBarType,
          navBarStyle: navBarStyle,
          replace: replace,
          history: true
        })
      } else {
        navigator.push({
          url: url,
          navBarType: 2
        })
      }

      // if (['blank/index', 'login/index', 'verify/index'].indexOf(url) < 0) {
      //   timeoutTool.restart()
      // } else {
      //   timeoutTool.stop()
      // }
    }
  })
}

function checkLoginTimeout(loginUser) {
  if (!loginUser) {
    return
  }
  let oldTime = loginUser.loginTime
  let nowTime = new Date().getTime()
  let diff = nowTime - oldTime
  if (diff > 5000 * 1000) {
    store.removeAll()
    navigateTo('blank/index', {
      replace: true
    })
  }
}

function navigateBack() {
  navigator.pop({}, e => {})
}

function navigateBack2() {
  LightSDK.native.back()
}

function closePage(cb) {
  LightSDK.native.close(null, () => {
    cb()
  })
}
export {
  navigateTo,
  navigateBack,
  closePage
}
