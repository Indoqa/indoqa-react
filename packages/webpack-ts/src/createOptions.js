const path = require('path')

const DEFAULT_OPTIONS = {
  appName: 'app',

  outputPath: './build',
  entry: './src/index.tsx',

  devPort: 3000,
  createSourceMap: true,
  autoprefixerBrowser: [
    '>0.2%',
    'not dead',
    'not ie <= 11',
    'not op_mini all'
  ],

  tsDevTypeChecking: false,
  tsAwesomeTypescriptLoader: false,
}

const createOptions = (userOptions) => {
  userOptions.tsconfigPath = path.join(process.cwd(), 'tsconfig.json')
  userOptions.tslintPath = path.join(process.cwd(), 'tslint.json')
  return Object.assign({}, DEFAULT_OPTIONS, userOptions)
}

module.exports = createOptions
