const path = require('path')

function commModulePathResolve(dir) {
  return path.join(__dirname, '../O32_comm/', dir)
}

module.exports = {
  build(config, merge, webpack) {
    let localconfig = {
      resolve: {
        extensions: ['.js', '.vue', '.json'],
        // 创建别名
        alias: {
          '@comm_assets': path.join(__dirname, 'assets'),
          '@comm_lib': path.join(__dirname, 'lib'),
          '@comm_utils': path.join(__dirname, 'utils'),
          '@comm_components': path.join(__dirname, 'components'),

          'comm_reset': path.join(__dirname, 'assets/css/reset.less'),
          'comm_variable': path.join(__dirname, 'assets/css/variable.less'),
          'comm_style': path.join(__dirname, 'assets/css/style.less'),
          'comm_fonts': path.join(__dirname, 'assets/fonts/iconfont.css')
        }
      },
      module: {
        rules: [
          // 对字体资源文件使用url-loader
          {
            test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
            loader: 'url-loader',
            options: {
              limit: 10000,
              name: path.join(__dirname, 'assets/fonts/[name].[hash:7].[ext]')
            }
          }
        ]
      },
      plugins: []
    }
    return merge(config, localconfig)
  }
}
