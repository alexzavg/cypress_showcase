const fse = require('fs-extra')

async function mocha_reset() {
  await fse.remove('cypress/mochawesome')
}

mocha_reset()
