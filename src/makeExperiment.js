const path = require('path')
const { estimateLib } = require('./estimateLib')
const { getFileSize, median } = require('./utils')

const getResultDefinition = lib => ({
  lib: path.basename(lib),
  size: `${getFileSize(lib).toFixed(2)}kB`,
  compileMetrics: [],
  estimoDurationMetrics: [],
  medianCompileTime: -1,
  medianEstimoDuration: -1,
})

const makeExperiment = async (countOfIterations, libs, perfCliArgs) => {
  const results = []

  for (const lib of libs) {
    const libMetrics = getResultDefinition(lib)

    for (let i = 0; i < countOfIterations; i += 1) {
      const { compileTime, estimoDuration } = await estimateLib(lib, perfCliArgs)
      libMetrics.compileMetrics.push(compileTime)
      libMetrics.estimoDurationMetrics.push(estimoDuration)
    }

    libMetrics.medianCompileTime = `${median(libMetrics.compileMetrics)}ms`
    libMetrics.medianEstimoDuration = `${median(libMetrics.estimoDurationMetrics)}s`
    results.push(libMetrics)
  }

  return results
}

module.exports = { makeExperiment }
