const path = require('path')
const fs = require('fs')

const isNodePackage = (dir, loc = '/') => {
  const fullPath = path.join(loc, dir)
  if (!fs.existsSync(fullPath)) {
    return false
  }
  return fs.readdirSync(fullPath).indexOf('package.json') > -1
}

module.exports = isNodePackage
