const path = require('path')

const libs = [
  path.resolve(path.join(__dirname, '..', 'libs', 'angular.1.7.8.min.js')),
  path.resolve(path.join(__dirname, '..', 'libs', 'moment.min.js')),
  path.resolve(path.join(__dirname, '..', 'libs', 'react.16.8.6.production.min.js')),
  path.resolve(path.join(__dirname, '..', 'libs', 'redux.4.0.1.min.js')),
  path.resolve(path.join(__dirname, '..', 'libs', 'jquery-3.4.0.min.js')),
  path.resolve(path.join(__dirname, '..', 'libs', 'antd.3.16.3.min.js')),
  path.resolve(path.join(__dirname, '..', 'libs', 'aurelia-core.1.0.2.min.js')),
  path.resolve(path.join(__dirname, '..', 'libs', 'backbone-min.1.4.0.js')),
  path.resolve(path.join(__dirname, '..', 'libs', 'bluebird.core.3.5.4.min.js')),
  path.resolve(path.join(__dirname, '..', 'libs', 'clipboard.2.0.4.min.js')),
]

module.exports = { libs }
