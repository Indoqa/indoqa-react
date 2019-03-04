const createResolve = require('./config/resolve.js')
const createOutput = require('./config/output.js')
const createPlugins = require('./config/plugins.js')
const createRules = require('./config/rules.js')
const createEntry = require('./config/entry.js')
const addDevelopmentOptions = require('./config/developmentOptions.js')
const addOptimizations = require('./config/optimizations.js')
const addNode = require('./config/node.js')

const createConfig = options => {
  const isDevelopment = process.env.NODE_ENV !== 'production'

  let config = {
    mode: isDevelopment ? 'development' : 'production',
    resolve: createResolve(options),
    entry: createEntry(options, isDevelopment),
    output: createOutput(options, isDevelopment),
    module: {
      rules: createRules(options, isDevelopment),
    },
    plugins: createPlugins(options, isDevelopment),
  }

  config = addDevelopmentOptions(config, options, isDevelopment)
  config = addOptimizations(config, options, isDevelopment)
  config = addNode(config, options, isDevelopment)

  // console.log('config=', JSON.stringify(config, null, 2))
  return config
}

module.exports = createConfig
