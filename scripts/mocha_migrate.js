const fse = require('fs-extra')

async function mocha_migrate() {
  await fse.ensureDir('cypress/screenshots')
  await fse.copy('cypress/screenshots', 'cypress/mochawesome/export/screenshots')
  await fse.ensureDir('cypress/videos')
  await fse.copy('cypress/videos', 'cypress/mochawesome/export/videos')
}

mocha_migrate()
