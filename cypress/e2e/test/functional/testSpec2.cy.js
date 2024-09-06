import { slowCypressDown } from 'cypress-slow-down'
import testPage from 'pages/test/testPage'

slowCypressDown(150)

describe(`Test Spec 2`, () => {
  before(() => {
    cy.visitStatusIgnore(testPage.primaryUrl)
    cy.url().should('include', testPage.primaryUrl)
  })
  describe('Test Spec 2 passes', () => {
    it('executes test step', () => {
      expect(200).to.equal(200)
    })
  })
})
