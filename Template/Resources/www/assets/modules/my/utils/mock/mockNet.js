function getConfig() {
  let params = {
    version: '1.0.0',
    modules: [
      {
        name: 'O32指令审批',
        desc: 'O32指令审批的一些描述',
        type: 1, // 1 本地页面；2 远端页面
        url: 'assets/modules/O32Comm-1.0.0_20190227/index.html',
        // url: 'http://172.29.5.87:8080/moduleO32-1.0.2_20190227/index.html',
        active: true
      },
      {
        name: '天健',
        desc: '天健的一些描述',
        type: 2,
        url: 'http://www.baidu.com',
        active: false
      },
      {
        name: '证投',
        desc: '证投的一些描述',
        type: 2,
        url: 'http://172.29.5.87:8080/moduleInvest-1.0.0_20190227/index.html',
        active: true
      }
    ],
    authorities: [
      {
        page: 'testAuthModule/index',
        elements: [
        ],
        auth: true
      },
      {
        page: 'detail/index',
        elements: [
        ],
        auth: false
      }
    ]
  }
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(params)
    }, 300)
  })
}

function requestVersion(fname) {
  return new Promise((resolve) => {
    let data = {
      name: 's1',
      name_v2: 's2_v2',
      place: 'place',
      age: 10
    }
    resolve(data)
  })
}

export {
  getConfig,
  requestVersion
}
