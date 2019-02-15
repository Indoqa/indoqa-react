const proxy = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(proxy('/words', { 
    "target": "http://api.wordnik.com",
    "pathRewrite": {
      "/words": ""
    }
  }));
};