import { slowCypressDown } from 'cypress-slow-down'
import testPage from 'pages/test/testPage'

slowCypressDown(150)

describe(`Test Spec`, () => {
  before(() => {
    cy.visitStatusIgnore(testPage.primaryUrl)
    cy.url().should('include', testPage.primaryUrl)
  })
  describe('Test Spec', () => {
    it('executes test step', () => {
      cy.log('all good')
    })
  })
})
