/*
 * @Author: SHEN
 * @Date: 2019-03-08 10:47:19
 * @Last Modified by: SHEN
 * @Last Modified time: 2019-04-04 17:45:05
 */
import Url from 'url'
import validator from 'validator'

export function isEmpty(o) {
  if (typeof (o) === 'string') {
    return o === 'undefined' || o === '' || o.length === 0 || o.trim().length === 0
  }
  return o === null || o === undefined
}

export function jsonParse(s) {
  try {
    return {
      value: JSON.parse(s)
    }
  } catch (e) {
    return {
      error: e
    }
  }
}

export function separateUrl(urlString) {
  let url = Url.parse(urlString)
  return {
    protocol: url.protocol.substr(0, url.protocol.length - 1),
    ip: url.hostname,
    port: url.port
  }
}

export function isEmail(string) {
  return validator.isEmail(string)
}

export function isIP(string) {
  return validator.isIP(string)
}

export function isNumer(string) {
  return validator.isNumeric(string)
}

export function isPort(string) {
  return validator.isNumeric(string, { no_symbols: true })
}

/* eslint-disable node/no-deprecated-api */
export function urlAddQuery(urlString, params) {
  let obj = Url.parse(urlString, true)
  delete obj.search
  Object.keys(params).map(key => {
    Object.assign(obj.query, { [key]: params[key] })
  })
  let url = Url.format(obj)
  return url
}

/**
 * 处理当 url 带有 hash（#）并带有 query（？）参数的时候，对url进行标准化处理
 * 标准的 url 格式为：http://192.168.2.35:8080/h5Module/index.html?a=1&b=2#/home/index
 * 错误的 url 格式为：http://192.168.2.35:8080/h5Module/index.html#/home/index?a=1&b=3
 * @param {*} url
 */
export function parseUrl(url) {
  let result = ''

  /** 判断是否有hash */
  let hasHash = (string) => {
    return string.indexOf('#') >= 0
  }
  let hasQuery = (string) => {
    return string.indexOf('?') >= 0
  }
  if (hasHash(url)) {
    // 处理 url 中带有 # 情况
    let arr = url.split('#')
    // 第一部分
    let subUrl1 = arr[0]
    // 第二部分
    let subUrl2 = arr[1]
    // 第一部分解析后的对象
    let subUrlObj1 = null
    // 第二部分解析后的对象
    let subUrlObj2 = null

    /** 判断两部分是否包含 ？，如果包含那么对应的解析对象为非 null */
    if (hasQuery(subUrl1)) {
      subUrlObj1 = Url.parse(subUrl1, false)
    }
    if (hasQuery(subUrl2)) {
      subUrlObj2 = Url.parse(subUrl2, false)
    }
    // 如果都没有 ?
    if (!(subUrlObj1 && subUrlObj2)) {
      result = subUrl1 + '#' + subUrl2
    }
    // 如果第一部分有 ?
    if (subUrlObj1 && !subUrlObj2) {
      let { protocol, host, path } = subUrlObj1
      result = protocol + '//' + host + path + '#' + subUrl2
    }
    // 如果第二部分有 ？
    if (!subUrlObj1 && subUrlObj2) {
      let { query, pathname } = subUrlObj2
      result = subUrl1 + '?' + query + '#' + pathname
    }
  } else {
    result = url
  }
  return result
}
