import { slowCypressDown } from 'cypress-slow-down'
import signInPage from 'pages/signInPage'
import claudePage from 'pages/claudePage'

slowCypressDown(150)

const { getUser } = require('utils/users.js')
const user = getUser('admin')

const testData = {
  claudeRequest: 'Respond with text: Cypress is the best test automation framework.',
  claudeResponse: 'Cypress is the best test automation framework.',
}

describe(`Simfoni Test Task`, () => {
  before(() => {
    cy.clearAllCache()
    cy.visitStatusIgnore(signInPage.primaryUrl)
    cy.url().should('include', signInPage.primaryUrl)
  })
  describe('AITemizer Site Smoke Test', () => {
    it('validates Login page is loaded properly', () => {
      signInPage.validateCompanyLogo()
    })
    it('signs in as Admin', () => {
      signInPage.signIn(user.username, user.password)
    })
    it('validates Claude page is loaded properly', () => {
      claudePage.validateDataExamplesBtn()
    })
    it('sends Claude request', () => {
      claudePage.sendClaudeRequest(testData.claudeRequest)
    })
    it('validates Claude response', () => {
      claudePage.validateClaudeResponse(testData.claudeResponse)
    })
  })
})
