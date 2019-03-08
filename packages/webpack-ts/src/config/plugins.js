const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const InlineChunkHtmlPlugin = require('react-dev-utils/InlineChunkHtmlPlugin')
const ManifestPlugin = require('webpack-manifest-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')

const createPlugins = (options, isDevelopment) => {
  const buildPlugins = []
  const devPlugins = []

  const definePlugin = new webpack.DefinePlugin({
    'process.env': {
      IS_BROWSER: true,
      IS_SERVERLESS: JSON.stringify(process.env.IS_SERVERLESS || false),
      NODE_ENV: JSON.stringify(isDevelopment ? 'development' : 'production'),
      SERVER_URL: JSON.stringify(process.env.SERVER_URL || ''),
    },
  })
  buildPlugins.push(definePlugin)
  devPlugins.push(definePlugin)

  const extractCssPlugin = new MiniCssExtractPlugin({
    filename: isDevelopment ? '[name].css' : `static/css/${options.appName}-[hash:8].css`,
    chunkFilename: isDevelopment ? '[id].css' : `static/css/${options.appName}-[id]-[hash:8].css`,
  })
  buildPlugins.push(extractCssPlugin)

  const createIndexHTMLPlugin = new HtmlWebpackPlugin({
    title: options.appName,
    inject: true,
    template: path.join(process.cwd(), 'public/index.html'),
  })
  buildPlugins.push(createIndexHTMLPlugin)
  devPlugins.push(createIndexHTMLPlugin)

  const copyPlugin = new CopyPlugin([
    {
      from: path.join(process.cwd(), 'public'),
      to: path.join(process.cwd(), 'build')
    },
  ])
  buildPlugins.push(copyPlugin)
  devPlugins.push(copyPlugin)

  if (options.createSourceMap) {
    buildPlugins.push(
      new webpack.SourceMapDevToolPlugin({
        filename: '[file].map',
      })
    )
  }
  const ignoreMomentJsLocaleResourcesPlugin = new webpack.IgnorePlugin(
    /^\.\/locale$/,
    /moment$/
  )
  buildPlugins.push(ignoreMomentJsLocaleResourcesPlugin)
  devPlugins.push(ignoreMomentJsLocaleResourcesPlugin)

  // const inlineChunkHtmlPlugin = new InlineChunkHtmlPlugin(HtmlWebpackPlugin, [/runtime~.+[.]js/])
  // buildPlugins.push(inlineChunkHtmlPlugin)

  const manifestPlugin = new ManifestPlugin({
    fileName: 'asset-manifest.json',
  })
  buildPlugins.push(manifestPlugin)

  const forkTsCheckerPlugin = new ForkTsCheckerWebpackPlugin({
    async: false,
    tsconfig: options.tsconfigPath,
    tslint: options.tslintPath,
  })
  buildPlugins.push(forkTsCheckerPlugin)
  devPlugins.push(forkTsCheckerPlugin)

  const hotModuleReplacementPlugin = new webpack.HotModuleReplacementPlugin()
  devPlugins.push(hotModuleReplacementPlugin)

  return isDevelopment ? devPlugins : buildPlugins
}

module.exports = createPlugins
