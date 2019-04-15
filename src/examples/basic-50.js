const path = require('path')
const { writeJson } = require('../utils')
const { makeExperiment } = require('../makeExperiment')
const { libs } = require('../libsForTests')

;

(async () => {
  const result = await makeExperiment(50, [libs[0]])
  writeJson(path.join(__dirname, '../..', 'reports', 'basic-50.json'), result)
})()
