const path = require('path')
const fs = require('fs')

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

const createOptions = (projectOptions) => {
  projectOptions.tsconfigPath = path.join(process.cwd(), 'tsconfig.json')
  projectOptions.isTypescript = fs.existsSync(projectOptions.tsconfigPath)
  if (!projectOptions.isTypescript) {
    projectOptions.entry = './src/index.js'
  }
  return Object.assign({}, DEFAULT_OPTIONS, projectOptions)
}

module.exports = createOptions
