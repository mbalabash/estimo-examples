const path = require('path')
const { writeJson } = require('../utils')
const { makeExperiment } = require('../makeExperiment')
const { libs } = require('../libsForTests')

;

(async () => {
  const result = await makeExperiment(5, [libs[0]], ['--set-cpu-throttling-rate', '--rate', '4'])
  writeJson(path.join(__dirname, '../..', 'reports', 'basic-cpu.json'), result)
})()
