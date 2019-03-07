/* eslint-disable no-console  */
const chalk = require('chalk')
const fs = require('fs')
const path = require('path')
const filesize = require('filesize')
const gzipSize = require('gzip-size').sync
const webpack = require('webpack')
const stripAnsi = require('strip-ansi')
const rimraf = require('rimraf')
const version = require('../package.json').version
const name = require('../package.json').name

const createConfig = require('./createConfig.js')
const createOptions = require('./createOptions.js')

const printFileSizes = (buildDir, stats) => {
  const assets = stats.toJson()
    .assets
    .filter((asset) => /\.(js|css|json)$/.test(asset.name))
    .map((asset) => {
      const assetPath = path.join(buildDir, asset.name)
      const fileContents = fs.readFileSync(assetPath)
      const originalSize = fs.statSync(assetPath)['size']
      const size = gzipSize(fileContents)
      return {
        folder: path.join(buildDir, path.dirname(asset.name)),
        name: path.basename(asset.name),
        size,
        sizeLabel: `${chalk.cyan(filesize(size))} (${filesize(originalSize)})`,
      }
    })

  assets.sort((a, b) => b.size - a.size)

  const longestSizeLabelLength = Math.max.apply(null,
    assets.map((a) => stripAnsi(a.sizeLabel).length)
  )

  assets.forEach((asset) => {
    let sizeLabel = asset.sizeLabel
    const sizeLength = stripAnsi(sizeLabel).length
    if (sizeLength < longestSizeLabelLength) {
      const rightPadding = ' '.repeat(longestSizeLabelLength - sizeLength)
      sizeLabel += rightPadding
    }
    console.log(`  ${sizeLabel}  ${asset.folder}${path.sep}${chalk.cyan(asset.name)}`)
  })
}

const build = (projectOptions) => {
  process.env.NODE_ENV = 'production'
  console.log(`${name} v${version} is creating an optimized production build...`)

  const options = createOptions(projectOptions)
  const config = createConfig(options)

  if (options.outputPath) {
    rimraf.sync(path.join(process.cwd(), options.outputPath))
  }

  webpack(config)
    .run((err, stats) => {
      if (err) {
        console.error('Failed to create a production build. Reason:')
        console.error(err.message || err)
        process.exit(1)
      }

      const compileErrors = stats.toJson().errors
      if (compileErrors !== null && compileErrors.length > 0) {
        console.error('Failed to compile the project. Reason:')
        console.log()
        compileErrors.forEach((msg) => {
          console.error(msg)
        })
        console.log()
        process.exit(1)
      }

      console.log(chalk.green('Compiled successfully.'))
      console.log()
      console.log('File sizes:')
      console.log()
      printFileSizes(options.outputPath, stats)
      console.log()
    })
}

module.exports = build
