/*
 * @Author: SHEN
 * @Date: 2019-03-07 10:06:12
 * @Last Modified by: SHEN
 * @Last Modified time: 2019-03-07 10:11:30
 *
 * RSA 加密字符串
 */

import JSEncrypt from 'jsencrypt'

const publicKey = '-----BEGIN PUBLIC KEY-----MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAr4tTpjgexWi3UveQWcTbhUr60Fy9eB6avnBpU5rIejMtaLTNGkkbRsSrxynj97e+mRNlYOshuWyg+LKWUEqiMMerc6pYtust/j+PGSjrceL/bqqNwQBkwInLL4NY7vrKPUo8blntR1v5pDe0OqeEatRmdy7DgBoIT5y+zHWIWetVN+Bdwb9L5dQ1Qn1xUOsgB9z6S8qNg4rP84OrOKoJgxk7KqAnAA7J4qaZGxA49uKrs2DKJMcYfIKd+aT7/vZ7bp8+t+1NABdpoyqsZK1qBtV2NCaPTbyOjmBPf7h/SYkJ3mR5lXYKXuiIqCf8hbZCknhzfHKcTNZPHd/1BVqv8QIDAQAB-----END PUBLIC KEY-----'

const jsencrypter = new JSEncrypt()
jsencrypter.setPublicKey(publicKey)

let rsa = {
  encryptString(string) {
    return encodeURI(jsencrypter.encrypt(string))
  }
}

export default rsa
