const path = require('path')
const { writeJson } = require('../utils')
const { makeExperiment } = require('../makeExperiment')
const { libs } = require('../libsForTests')

;

(async () => {
  const result = await makeExperiment(5, [libs[0]])
  writeJson(path.join(__dirname, '../..', 'reports', 'basic.json'), result)
})()
