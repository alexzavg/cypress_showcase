const { config: stgConfig } = require('../config/stg')

// sets the environment based on the inputted config
exports.setEnvironment = config => {
  config.env.ENVIRONMENT = config.env.ENVIRONMENT || 'staging'
  switch (config.env.ENVIRONMENT.toLowerCase()) {
    case 'stg':
      config.env = Object.assign(stgConfig, config.env)
      return config
    default:
      config.env = Object.assign(stgConfig, config.env)
      return config
  }
}
