import Light from 'light'
import { isEmpty, jsonParse, separateUrl, isEmail, isIP, isNumer, isPort } from '@utils/func'

const Vue = Light.Vue

// https://codeday.me/bug/20170923/74315.html
function increaseBrightness(hex, percent) {
  // strip the leading # if it's there
  hex = hex.replace(/^\s*#|\s*$/g, '')
  if (hex.length === 3) {
    hex = hex.replace(/(.)/g, '$1$1')
  }
  var r = parseInt(hex.substr(0, 2), 16)
  var g = parseInt(hex.substr(2, 2), 16)
  var b = parseInt(hex.substr(4, 2), 16)
  return '#' +
     ((0 | (1 << 8) + r + (256 - r) * percent / 100).toString(16)).substr(1) +
     ((0 | (1 << 8) + g + (256 - g) * percent / 100).toString(16)).substr(1) +
     ((0 | (1 << 8) + b + (256 - b) * percent / 100).toString(16)).substr(1)
}

Vue.mixin({
  methods: {
    isEmpty(o) {
      return isEmpty(o)
    },
    highlightColor(hex, percent) {
      return increaseBrightness(hex, percent)
    },
    jsonParse(string) {
      return jsonParse(string)
    },
    separateUrl(urlString) {
      return separateUrl(urlString)
    },
    isEmail(string) {
      return isEmail(string)
    },
    isIP(string) {
      return isIP(string)
    },
    isNumer(string) {
      return isNumer(string)
    },
    isPort(string) {
      return isPort(string)
    }
  }
})
