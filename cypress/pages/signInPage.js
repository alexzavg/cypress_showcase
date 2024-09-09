const basePage = require('./basePage')

class signInPage extends basePage {
  primaryUrl = '/login_page'
  elements = {
    ...this.elements,
    loginFormContainer: () => cy.get('[action="/login_page"]'),
    usernameInput: () => cy.get('[name="username"]'),
    passwordInput: () => cy.get('[name="password"]'),
    loginBtn: () => cy.get('[type="submit"]'),
  }
  validateCompanyLogo() {
    this.elements.logoContainer().should('be.visible').and('include.text', 'AI').and('include.text', 'Temizer')
  }
  signIn(username, password) {
    this.elements.loginFormContainer().should('exist').within(() => {
      this.elements.usernameInput().type(username).should('have.value', username)
      this.elements.passwordInput().type(password).should('have.value', password)
      this.elements.loginBtn().click()
    })
  }
}

module.exports = new signInPage()
