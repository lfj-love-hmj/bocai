const path = require('path')
const resolve = dir => path.join(__dirname, dir);
const TerserPlugin = require('terser-webpack-plugin')
const Timestamp = new Date().getTime()


const isDev = process.env.NODE_ENV === 'development'
module.exports = {
	productionSourceMap: false,
  css: {
    sourceMap: true
  },
  // 部署应用包时的基本 URL
  publicPath: isDev ? '/' : process.env.VUE_APP_ASSET_PATH,
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'less',
      patterns: [
        path.resolve(__dirname, `src/assets/${process.env.VUE_APP_PROJECT_NAME}/styles/common.less`)
      ]
    }
  },
  chainWebpack: config => {
    // config.plugins.delete('prefetch-index');
    // config.plugins.delete('preload-index');
    config.plugin('html')
      .tap(args => {
        // 设置页面标题的icon
        args[0].favicon = path.join(__dirname, `./src/assets/${process.env.VUE_APP_PROJECT_NAME}/favicon.ico`)
        return args
      });
    config.resolve.alias
      .set('@assets',resolve(`src/assets/${process.env.VUE_APP_PROJECT_NAME}`));
    config.plugins.delete('prefetch');
    config.plugins.delete('preload');
    if(!isDev) {
      config.output.filename(`js/[name].[hash:8]${Timestamp}.js`).end();
      config.output.chunkFilename(`js/[name].[hash:8]${Timestamp}.js`).end();
      config.plugin('extract-css').tap(args => [{
          filename: `css/[name].[hash:8]${Timestamp}.css`,
          chunkFilename: `css/[name].[hash:8]${Timestamp}.css`
      }])
    }
  },
  configureWebpack: {
    plugins:!isDev?[
      new TerserPlugin({
        terserOptions: {
          compress: {
            warnings: false,
            drop_console: true,
            drop_debugger: true,
            pure_funcs: ['console.log']
          }
        }
      })
    ]:[]
  }
}
