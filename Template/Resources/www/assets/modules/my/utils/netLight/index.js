import Light from 'light'
import { JSEncrypt } from 'jsencrypt'

let public_key = 'MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA0ZZnk2SxaAkukJes72TKo23PgmNCidpD9h1pghCZcuwiBtGFyovWO5MJX6zmP0xZ1d5tGnaLlodHqSJNm5xcj8bOueI/sX8HZTySOSogxMmr2cCGakHP6CGTvEupEIQ62VIBSL/A+ZjBzfzfQ6QdmkzVXtidicDzmZxWX9Ad4xa9AobBrKEMEJ7U4fRqhHzyOBMLLja3YYsPej/8gaswCWxQGDm22jwyIyOmzgWA69NhK419xbKzkq+zlKi7CZ2Xr5ClRnB4jJI+cQjsUV/rb1iTYCMVJYW093AfEcJcqS9t9aiqwuLP4aSroiFyQQPHuTwWyuEj7hgmgbSO6KJ0swIDAQAB'

function encryptString(string) {
  var encrypt = new JSEncrypt()
  encrypt.setPublicKey(public_key)
  return encrypt.encrypt(string)
}

let FuncNames = {
  login: 'common/login.json'
}

let net = {
  baseUrl: 'http://115.233.212.240:8005/Oplus-Mobile-Web/V2/',
  request(funcName, params) {
    return new Promise((resolve, reject) => {
      Light.ajax({
        type: 'post',
        url: this.baseUrl + funcName,
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        data: params,
        success: function (data) {
          resolve(data)
        },
        error: function (err) {
          reject(err)
        }
      })
    })
  }
}

export {
  FuncNames,
  net,
  encryptString
}
