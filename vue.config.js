/**
 * vue webpack主配置文件
 * */

// 导入webpack运用
// const webpack = require("webpack");
const CompressionPlugin = require("compression-webpack-plugin");

module.exports = {
  // publicPath: "./",
  publicPath: "/portals-ui/",
  // todo: 打包文件目录地址
  outputDir: "dist",
  /*  // 放置生成的静态资源 (js、css、img、fonts) 的 (相对于 outputDir 的) 目录
  assetsDir: 'static', */
  lintOnSave: false, // 是否开启eslint保存检测 ,它的有效值为 true || false || 'error'\
  productionSourceMap: false, // 是否在构建生产包时生成 sourceMap 文件，false将提高构建速度
  pages: {
    index: {
      // page 的入口
      entry: "src/main.js",
      // 模板来源
      template: "public/index.html",
      // 在 dist/index.html 的输出
      filename: "index.html",
      // 当使用 title 选项时，
      // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
      title: "烟草门户",
      // 在这个页面中包含的块，默认情况下会包含
      // 提取出来的通用 chunk 和 vendor chunk。
      chunks: ["chunk-vendors", "chunk-common", "index"]
    }
    // 当使用只有入口的字符串格式时，
    // 模板会被推导为 `public/subpage.html`
    // 并且如果找不到的话，就回退到 `public/index.html`。
    // 输出文件名会被推导为 `subpage.html`。
    // subpage: "src/subpage/main.js"
  },
  /* webpack 配置，键值对象时会合并配置，为方法时会改写配置 */
  configureWebpack: {
    // 取消webpack警告的性能提示
    performance: {
      hints: false
    },
    // webpack 的插件
    plugins: [
      new CompressionPlugin({
        // 打包的时候开启gzip可以很大程度减少包的大小，非常适合于上线部署
        filename: "[path].gz[query]", // 打包出来的文件名
        algorithm: "gzip", // 打包方法
        test: /\.js$|\.html$|.\css/, // 匹配文件名,
        threshold: 10240, // 对超过10K的文件进行压缩
        minRatio: 0.8 // 最小比例
      })
    ]
  },
  /* 配置 webpack-dev-server 行为 */
  devServer: {
    // 当出现编译器错误或警告时，在浏览器中同时显示警告和错误
    overlay: {
      warnings: true,
      errors: true
    },
    open: true, // 告诉 dev-server 在 server 启动后打开浏览器
    host: "localhost", // 指定使用一个 host
    port: 1980, // 指定要监听请求的端口号
    https: false, // 是否指定 dev-server 通过 HTTP 提供服务
    hotOnly: false, // 是否启用热模块替换
    /* 后端开发服务器 API 配置  target：重写路径 ws：代理服务器交互 */
    proxy: {
      "/portals-api": {
        // 博客后端接口
        target: process.env.VUE_APP_URL,
        changeOrigin: true,
        pathRewrite: {
          "^/portals-api": ""
        }
      }
    }
  }
};
