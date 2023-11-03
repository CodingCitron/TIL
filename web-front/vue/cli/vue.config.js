const { defineConfig } = require('@vue/cli-service')
const path = require('path')

module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    resolve: {
        alias: {
            '@': path.join(__dirname, 'src/')
        }
    }
  },
  chainWebpack: config => {
    config.module
      .rule('file')
      .test(/\.(xlsx|xls|csv)(\?.*)?$/)
      .set('type', 'asset')
      .set('generator', {
        filename: "[contenthash][ext]"
      })
  }
})
