const path = require('path')
const estimo = require('estimo')

;

(async () => {
  const report = await estimo(path.resolve(path.join(__dirname, './lib/2kb.js')))
  console.log(report)
})()
