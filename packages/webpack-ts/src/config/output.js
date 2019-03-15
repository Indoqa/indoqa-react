const path = require('path')

const createOutput = (options, isDevelopment) => {
  if (isDevelopment) {
    return {
      path: path.join(process.cwd(), options.outputPath),
      filename: '[name].js',
      chunkFilename: '[name]-[chunkhash].js',
      publicPath: '/',
      devtoolModuleFilenameTemplate: (info) => path.resolve(info.absoluteResourcePath)
        .replace(/\\/g, '/'),
    }
  }

  return {
    path: path.join(process.cwd(), options.outputPath),
    filename: 'static/js/[name]-[hash].js',
    chunkFilename: 'static/js/[name]-[chunkhash:8].chunk.js',
    publicPath: '/',
    devtoolModuleFilenameTemplate: (info) =>
      path
        .relative(path.join(process.cwd(), 'src'), info.absoluteResourcePath)
        .replace(/\\/g, '/')
  }
}

module.exports = createOutput
