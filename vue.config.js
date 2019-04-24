'use strict'
const path = require('path')
function resolve(dir) {
  return path.join(__dirname, dir)
}
module.exports = {
  baseUrl: './',
  lintOnSave: process.env.NODE_ENV === 'development',
  productionSourceMap: false,
  devServer: {
    open: true,
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@': resolve('src')
      }
    }
  },
  css: {
    loaderOptions: {
      sass: {
        data: `
          @import "@/styles/colorConfig.scss";
        `
      }
    }
  },
}