const path = require('path')

const createEntry = (options, isDevelopment) => {
  const jsPath = path.join(process.cwd(), options.entry)
  const appName = options.appName

  if (isDevelopment) {
    const webpackHmr = require.resolve('react-dev-utils/webpackHotDevClient')
    return {
      [appName]: [webpackHmr, jsPath],
    }
  }

  return {
    [appName]: [jsPath],
  }
}

module.exports = createEntry
