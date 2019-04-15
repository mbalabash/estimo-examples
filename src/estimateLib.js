const estimo = require('estimo')

const estimateLib = async (lib, perfCliArgs) => {
  const start = Date.now()
  const { javaScript, javaScriptCompile } = await estimo(lib, perfCliArgs)
  const finish = Date.now()

  const compileTime = parseFloat(javaScript + javaScriptCompile).toFixed(2)
  const estimoDuration = parseFloat((finish - start) / 1000).toFixed(2)

  return {
    compileTime,
    estimoDuration,
  }
}

module.exports = { estimateLib }
