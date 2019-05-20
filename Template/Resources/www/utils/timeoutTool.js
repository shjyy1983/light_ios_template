/*
 * @Author: SHEN
 * @Date: 2019-03-14 14:15:19
 * @Last Modified by: SHEN
 * @Last Modified time: 2019-03-18 15:59:10
 *
 * 超时管理工具
 * 当用户停留在当前页面超过一定时间后，弹出提示登出对话框
 */
import Light from 'light'
import LightSDK from 'light-sdk'
import { navigateTo, closePage } from '@utils/bridge'
var modal = Light.requireModule('modal')

let timeoutTool = {
  interval: 8 * 1000, // 20秒
  timer: null,
  restart() {
    this.stop()
    this.start()
  },
  start() {
    modal.toast({ message: '开始定时器', duration: 1 })
    this.timer = setTimeout(() => {
      modal.toast({ message: '定时时间到', duration: 1 })
      closePage()
      navigateTo('verify/index', { replace: true })
    }, this.interval)
  },
  stop() {
    this.timer && clearTimeout(this.timer)
    this.timer = null
    modal.toast({ message: '停止定时器' + this.timer, duration: 1 })
  },
  openAuth() {
    let params = {
      'verifyType': 'GL'
    }
    LightSDK.native.verifyOpeation(params, (res) => {
      console.log(res)
    })
  }
}

export default timeoutTool
