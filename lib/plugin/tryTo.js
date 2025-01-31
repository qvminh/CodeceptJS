const { tryTo } = require('../effects')

const defaultConfig = {
  registerGlobal: true,
}

module.exports = function (config) {
  config = Object.assign(defaultConfig, config)
  console.log(`Deprecation Warning: 'tryTo' has been moved to the 'codeceptjs/effects' module`)

  if (config.registerGlobal) {
    global.tryTo = tryTo
  }

  return tryTo
}
