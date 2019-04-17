const { npx } = require('node-npx')

const spawnEstimoProcess = args => new Promise((resolve, reject) => {
  const proc = npx('estimo', args)
  let result = null

  proc.stdout.on('data', (data) => {
    const stringContent = data.toString()
    if (!stringContent.includes('Done')) {
      result = {}
      eval(`result=${stringContent}`) // eslint-disable-line no-eval
    }
  })

  proc.on('close', (code) => {
    if (code === 0) resolve(result)
    else {
      reject(new Error(`Can't execute 'estimo'\nArgs: ${JSON.stringify(args)}`))
    }
  })
})

const estimateLib = async (lib, perfCliArgs = []) => {
  const start = Date.now()
  const { javaScript, javaScriptCompile } = await spawnEstimoProcess(['-l', lib, perfCliArgs])
  const finish = Date.now()

  const compileTime = parseFloat(javaScript + javaScriptCompile).toFixed(2)
  const estimoDuration = parseFloat((finish - start) / 1000).toFixed(2)

  return {
    compileTime,
    estimoDuration,
  }
}

module.exports = { estimateLib }
