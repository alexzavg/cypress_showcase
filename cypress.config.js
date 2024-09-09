require('dotenv').config()
const fs = require('fs')

const os = require('os')

const { defineConfig } = require('cypress')
const browserify = require('@cypress/browserify-preprocessor')
const dotenvPlugin = require('cypress-dotenv')
const { beforeRunHook, afterRunHook } = require('cypress-mochawesome-reporter/lib')

const { setEnvironment } = require('./cypress/utils/environment.js')

module.exports = defineConfig({
  blockHosts: [],
  chromeWebSecurity: false,
  chromeFlags: ['--disable-dev-shm-usage'],
  experimentalMemoryManagement: true,
  defaultCommandTimeout: 20000,
  requestTimeout: 20000,
  pageLoadTimeout: 20000,
  // https://github.com/LironEr/cypress-mochawesome-reporter
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    reportDir: 'cypress/mochawesome/export',
    reportFilename: 'mochawesome',
    charts: true,
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: true,
    overwrite: true,
  },
  retries: {
    runMode: 5,
    openMode: 0,
  },
  video: true,
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return setupDependencies(on, config)
    },
    baseUrl: 'http://54.147.49.214:5001',
    testIsolation: false,
  },
  viewportWidth: 1366,
  viewportHeight: 768,
})

const setupDependencies = (on, config) => {
  // Use a .env file to set Cypress environment variables. cypress.env.json is being phased out (https://github.com/cypress-io/cypress/issues/909).
  // Keep this as close to the top of the function as possible.
  config = dotenvPlugin(config)
  config = setEnvironment(config)
  console.log(config)

  // Adds baseUrl from env to the config, because it needs to be set in the root cypress.json.
  if (config.resolved.specPattern.value.includes('test')) {
    config.baseUrl = config.env.BASE_URL
  } else {
    cy.log('no url set')
  }

  if (config.env.GROUP) {
    // Reset the existing specPattern
    config.specPattern = []
    var lines = fs.readFileSync(`${config.projectRoot}/groups/${config.env.GROUP}`, 'utf-8').split('\n').filter(Boolean)
    config.specPattern = lines
  }

  // Lets us use a babelrc file
  const options = browserify.defaultOptions
  options.browserifyOptions.transform[1][1].babelrc = true

  on('file:preprocessor', browserify(options))

  require('cypress-mochawesome-reporter/plugin')(on)

  // see commands in terminal output https://github.com/bahmutov/cypress-failed-log
  on('task', {
    getOS() {
      return os.platform()
    },
    log(message) {
      console.log(message)
      return null
    },
    failed: require('cypress-failed-log/src/failed')(),
  })

  on('before:run', async details => {
    console.log('override before:run')
    await beforeRunHook(details)
  })

  on('after:run', async () => {
    console.log('override after:run')
    await afterRunHook()
  })

  return config
}
