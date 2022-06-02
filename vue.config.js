const apiMocker = require('webpack-api-mocker')

const path = require('path')

function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  transpileDependencies: ['common'],
  chainWebpack(config) {
    config.plugin('html').tap((args) => {
      args[0].title = '模板系统'
      return args
    })
    config.resolve.alias.set('@', resolve('src'))
    config.plugin('preload').tap(() => [
      {
        rel: 'preload',
        fileBlacklist: [/\.map$/, /hot-update\.js$/, /runtime\..*\.js$/],
        include: 'initial'
      }
    ])

    config.plugins.delete('prefetch')

    config.module
      .rule('svg')
      .exclude.add(resolve('src/layouts/components/SvgIcon/svg'))
      .end()
    config.module
      .rule('icons')
      .test(/\.svg$/)
      .include.add(resolve('src/layouts/components/SvgIcon/svg'))
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]'
      })
      .end()

    config.module
      .rule('vue')
      .use('vue-loader')
      .loader('vue-loader')
      .tap(options => {
        options.compilerOptions.preserveWhitespace = true
        return options
      })
      .end()

    config
      .when(process.env.NODE_ENV !== 'development',
        config => {
          config
            .plugin('ScriptExtHtmlWebpackPlugin')
            .after('html')
            .use('script-ext-html-webpack-plugin', [{
              inline: /runtime\..*\.js$/
            }])
            .end()
          config
            .optimization.splitChunks({
            chunks: 'all',
            cacheGroups: {
              libs: {
                name: 'chunk-libs',
                test: /[\\/]node_modules[\\/]/,
                priority: 10,
                chunks: 'initial'
              },
              elementUI: {
                name: 'chunk-elementUI',
                priority: 20,
                test: /[\\/]node_modules[\\/]_?element-ui(.*)/
              },
              commons: {
                name: 'chunk-commons',
                test: resolve('src/components'),
                minChunks: 3,
                priority: 5,
                reuseExistingChunk: true
              }
            }
          })
          config.optimization.runtimeChunk('single')
        }
      )
  },
  lintOnSave: process.env.NODE_ENV === 'development',
  productionSourceMap: false,
  devServer: {
    port: 8080,
    open: false,
    overlay: {
      warnings: false,
      errors: true
    },
    before(app) {
      apiMocker(app, path.resolve('./mocker/index.js'));
    },
  }
}
