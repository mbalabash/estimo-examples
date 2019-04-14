const estimo = require('estimo')

const libs = [
  'https://cdnjs.cloudflare.com/ajax/libs/react/16.8.6/umd/react.production.min.js',
  'https://momentjs.com/downloads/moment.min.js',
  'https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.7.8/angular.min.js',
  'https://cdnjs.cloudflare.com/ajax/libs/redux/4.0.1/redux.min.js',
]

;(async () => {
  const report = await estimo(libs[0], ['--set-cpu-throttling-rate', '--rate', '4'])
  console.log(report)
})()
