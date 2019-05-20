const path = require('path')

module.exports = {
  build(config, merge, webpack) {
    let localconfig = {
      resolve: {
        extensions: ['.js', '.vue', '.json'],
        // 创建别名
        alias: {
          '@components': path.join(__dirname, 'components'),
          '@utils': path.join(__dirname, 'utils'),
          'mainStyle': path.join(__dirname, 'assets/css/main.less'),
          'variable': path.join(__dirname, 'assets/css/variable.less')
        }
      },
      module: {
        rules: [
        ]
      },
      plugins: [
      ]
    }
    return merge(config, localconfig)
  }
}
