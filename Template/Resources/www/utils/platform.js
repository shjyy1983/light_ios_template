/*
 * @Author: SHEN
 * @Date: 2019-03-03 22:02:55
 * @Last Modified by: SHEN
 * @Last Modified time: 2019-05-08 14:35:56
 */

import LightSDK from 'light-sdk'
import { store, keys } from '@utils/store'

let iPhonesHavehairList = ['iPhone10,3', 'iPhone10,6', 'iPhone11,2', 'iPhone11,4', 'iPhone11,6', 'iPhone11,8']

function getSystemInfo() {
  return new Promise(resolve => {
    LightSDK.native.getSystemInfo(null, res => {
      resolve(res.data)
    })
  })
}

function getVersion() {
  return new Promise(resolve => {
    LightSDK.native.getVersion(null, res => {
      resolve(res.data)
    })
  })
}

function getNavBarHeight(platform, model) {
  let height = 64 * 2
  platform = platform.toLowerCase()
  if (platform === 'ios') {
    if (iPhonesHavehairList.indexOf(model) >= 0) {
      height = 88 * 2
    } else {
      height = 64 * 2
    }
  } else {
    height = 64 * 2
  }
  return height
}

function getNecessarySystemInformation(callback) {
  let p1 = getSystemInfo()
  let p2 = getVersion()
  Promise.all([p1, p2]).then(results => {
    let data = {}
    // getSystemInfo 和 版本数据
    for (let result of results) {
      Object.assign(data, result)
    }

    // 计算得到的导航栏高度
    let navBarHeight = getNavBarHeight(data.platform, data.model)
    Object.assign(data, { navBarHeight })

    // 是否第一次安装（更新）
    let version = data.version
    store.getItem(version).then(res => {
      if (res === 'undefined') {
        store.setItem(version, 'true')
        // 清空必要缓存数据，用于强制跳转到登陆页面
        store.clearData([{ key: keys.kToken, scope: 'O32' }])
        Object.assign(data, { isFirstInstalled: true })
      } else {
        Object.assign(data, { isFirstInstalled: false })
      }
      callback(data)
    })
  }).catch(e => callback())
}

export { getNecessarySystemInformation }
