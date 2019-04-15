const path = require('path')
const estimo = require('estimo')
const { getFileSize, median, writeJson } = require('./utils')

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

const countOfExperiments = 3

const makeExperiment = async (perfCliArgs) => {
  const estimations = {}

  for (const lib of libs) {
    const metrics = []
    const time = []
    const key = path.basename(lib)
    estimations[key] = { size: `${getFileSize(lib).toFixed(2)}kB`, medianCompileTime: -1 }

    for (let i = 0; i < countOfExperiments; i += 1) {
      const start = Date.now()
      const { javaScript } = await estimo(lib, perfCliArgs)
      const finish = Date.now()
      time.push((finish - start) / 1000)
      metrics.push(parseInt(javaScript, 10))
    }

    estimations[key].compileTimeMetrics = metrics
    estimations[key].medianCompileTime = `${median(metrics)}ms`
    estimations[key].medianDuration = `${median(time)}s`
  }

  return estimations
}

;(async () => {
  const results = await makeExperiment()
  writeJson(path.join(__dirname, '..', 'reports', 'results.json'), results)

  const resultsWithLowCPU = await makeExperiment(['--set-cpu-throttling-rate', '--rate', '4'])
  writeJson(path.join(__dirname, '..', 'reports', 'resultsWithLowCPU.json'), resultsWithLowCPU)
})()
