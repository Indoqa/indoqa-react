/* eslint-disable no-console */
const fs = require('fs')
const path = require('path')
const WebpackDevServer = require('webpack-dev-server')
const errorOverlayMiddleware = require('react-dev-utils/errorOverlayMiddleware')
const noopServiceWorkerMiddleware = require('react-dev-utils/noopServiceWorkerMiddleware')
const webpack = require('webpack')
const chalk = require('chalk')

const VERSION = require('../package.json').version
const NAME = require('../package.json').name

const HOST = process.env.HOST || '0.0.0.0'

const createConfig = require('./createConfig.js')
const createOptions = require('./createOptions.js')

const createServerConfig = proxy => {
  const proxySetup = path.join(process.cwd(), 'src/setupProxy.js')
  return {
    compress: true,
    clientLogLevel: 'none',
    historyApiFallback: {
      // Paths with dots should still use the history fallback.
      // See https://github.com/facebook/create-react-app/issues/387.
      disableDotRule: true,
    },
    hot: true,
    publicPath: '/',
    quiet: true,
    overlay: false,
    proxy,
    before(app) {
      if (fs.existsSync(proxySetup)) {
        // This registers user provided middleware for proxy reasons
        require(proxySetup)(app)
      }
      app.use(errorOverlayMiddleware())
      app.use(noopServiceWorkerMiddleware())
    },
  }
}

const getAppPackageJson = () => {
  const appDirectory = fs.realpathSync(process.cwd())
  const resolveApp = relativePath => path.resolve(appDirectory, relativePath)
  return require(resolveApp('package.json'))
}

const runDevServer = customOptions => {
  process.env.NODE_ENV = 'development'

  process.on('unhandledRejection', err => {
    throw err
  })

  console.log(`${NAME} v${VERSION} is going to start a development server ...`)

  const options = createOptions(customOptions)
  const config = createConfig(options)
  const compiler = webpack(config)
  const appPackageJson = getAppPackageJson()
  const proxy = appPackageJson.proxy

  const devServer = new WebpackDevServer(compiler, createServerConfig(proxy))
  devServer.listen(options.devPort, HOST, err => {
    if (err) {
      return console.log(err)
    }

    console.log(
      chalk.green(
        `${appPackageJson.name} v${appPackageJson.version} runs at port ${options.devPort}`
      )
    )
  })
}

module.exports = runDevServer
