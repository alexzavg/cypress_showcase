class basePage {
  primaryUrl = ''
  elements = {
    test: () => cy.get('[data-cy="test"]'),
  }
  apiCallAliases = []
  mockApiCalls = () => {}
}

module.exports = basePage
