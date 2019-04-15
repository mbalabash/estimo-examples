const estimo = require('estimo')

const estimateLib = async (lib, perfCliArgs) => {
  const start = Date.now()
  const { javaScript } = await estimo(lib, perfCliArgs)
  const finish = Date.now()

  const compileTime = parseFloat(javaScript).toFixed(2)
  const estimoDuration = parseFloat((finish - start) / 1000).toFixed(2)

  return {
    compileTime,
    estimoDuration,
  }
}

module.exports = { estimateLib }
