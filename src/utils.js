const fs = require('fs')
const jsonfile = require('jsonfile')

const getFileSize = (filename) => {
  const stats = fs.statSync(filename)
  const fileSizeInBytes = stats.size
  return fileSizeInBytes / 1024
}

const median = (array) => {
  const sortedArray = array.sort((a, b) => a - b)
  const { length } = sortedArray
  const mid = parseInt(length / 2, 10)
  if (length % 2) {
    return sortedArray[mid]
  }
  const low = mid - 1
  const hight = mid
  return (sortedArray[low] + sortedArray[hight]) / 2
}

const writeJson = (fileName, content) => {
  jsonfile.writeFileSync(fileName, content, { spaces: 2 })
}

module.exports = {
  getFileSize,
  writeJson,
  median,
}
