const basePage = require('./basePage')

class testPage extends basePage {
  primaryUrl = ''
  elements = {
    ...this.elements,
  }
}

module.exports = new testPage()
