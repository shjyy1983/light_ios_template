/*
 * @Author: SHEN
 * @Date: 2019-02-27 15:10:40
 * @Last Modified by: SHEN
 * @Last Modified time: 2019-02-27 15:15:58
 */

import App from 'light'

function checkPageAuth(viewId) {
  let authorities = window.authConfig.authorities
  let hasAuth = true // 默认是允许跳转
  for (let auth of authorities) {
    console.log('auth', auth)
    if (auth.page === viewId) {
      hasAuth = auth.auth
      break
    }
  }
  return hasAuth
}

function navigateTo(viewId) {
  if (checkPageAuth(viewId)) {
    App.navigate(viewId)
  } else {
    App.navigate('error/index')
  }
}

export {
  navigateTo
}
