const basePage = require('./basePage')

class claudePage extends basePage {
  primaryUrl = '/claude'
  elements = {
    ...this.elements,
    dataExamplesbtn: () => cy.get('#dataExamplesButton'),
    claudeRequestTextarea: () => cy.get('#userInput'),
    sendRequestBtn: () => cy.get('[onclick="sendBedrockRequest()"]'),
    responseContainer: () => cy.get('#responseContent'),
  }
  validateDataExamplesBtn() {
    this.elements.dataExamplesbtn().should('be.visible')
  }
  sendClaudeRequest(request) {
    this.elements.claudeRequestTextarea().type(request).should('have.value', request)
    this.elements.sendRequestBtn().click()
  }
  validateClaudeResponse(response) {
    this.elements.responseContainer().should('be.visible').and('have.text', response)
  }
}

module.exports = new claudePage()
