// This is the support file for the e2e testing type. https://docs.cypress.io/guides/core-concepts/writing-and-organizing-tests#Support-file
// If we ever started writing component tests, there would be a separate support file.

require('./commands')

require('cypress-mochawesome-reporter/register')

// Log failures to console
require('cypress-failed-log')

//const addContext = require('mochawesome/addContext')

//const { createScreenshotUrl } = require('../utils/screenshots.js')
//const { createVideoUrl } = require('../utils/videos.js')

// Prevents console errors in application code from failing Cypress. This will likely always be desired because of ads, but can reassess later if this is the correct way forward.
Cypress.on('uncaught:exception', () => {
  // returning false here prevents Cypress from
  // failing the test
  return false
})

// Prevents pageload timeouts from failing the tests. Errant scripts from ads frequently prevent the page from fully loading. Going to have to rely on other means to verify if the page does not load correctly (screenshots, visual tests, etc.)
Cypress.on('fail', e => {
  // If a pageload timeout occurs, ignore and keep going.
  if (e.name === 'CypressError' && e.message.includes('Your page did not fire its `load` event')) {
    return false
  }
  //Else fail as expected
  throw new Error(e)
})

// https://docs.cypress.io/guides/guides/continuous-integration.html#In-Docker
Cypress.on('before:browser:launch', (browser = {}, launchOptions) => {
  if (browser.family === 'chromium' && browser.name !== 'electron') {
    launchOptions.args.push('--disable-dev-shm-usage')
  }

  return launchOptions
})

/*
// include cypress screenshots and videos in mocha
Cypress.on('test:after:run', (test, runnable) => {
  if (test.state === 'failed') {
    const imageUrl = createScreenshotUrl(runnable, Cypress.spec.name, '(failed)')
    addContext({ test }, imageUrl)
  }
  const videoUrl = createVideoUrl(runnable, Cypress.spec.name)
  addContext({ test }, videoUrl)
})
*/
