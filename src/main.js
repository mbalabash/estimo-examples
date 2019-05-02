const path = require('path')
const estimo = require('estimo')

;

(async () => {
  const report = await estimo([
    path.resolve(path.join(__dirname, './lib/2kb.js')),
    path.resolve(path.join(__dirname, './lib/1.4mb.js')),
    'https://cdnjs.cloudflare.com/ajax/libs/react/16.8.6/umd/react.production.min.js',
  ])

  console.log(report)
})()
