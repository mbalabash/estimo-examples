const path = require('path')
const estimo = require('estimo')

const libs = [
  path.resolve(path.join(__dirname, '..', 'libs', 'angular.1.7.8.min.js')),
  path.resolve(path.join(__dirname, '..', 'libs', 'moment.min.js')),
  path.resolve(path.join(__dirname, '..', 'libs', 'react.16.8.6.production.min.js')),
  path.resolve(path.join(__dirname, '..', 'libs', 'redux.4.0.1.min.js')),
  path.resolve(path.join(__dirname, '..', 'libs', 'jquery-3.4.0.min.js')),
]

;(async () => {
  const report = await estimo(libs[0], ['--set-cpu-throttling-rate', '--rate', '4'])
  console.log(report)
})()
