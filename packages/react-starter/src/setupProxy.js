const proxy = require('http-proxy-middleware')

module.exports = function (app) {
  app.use(proxy('/geonames', {
    'target': 'http://api.geonames.org',
    'headers': {
      'Access-Control-Allow-Origin': '*'
    },
    'pathRewrite': {
      '/geonames': ''
    }
  }))
  app.use(proxy('/words', {
    'target': 'http://api.wordnik.com',
    'pathRewrite': {
      '/words': ''
    }
  }))
}
