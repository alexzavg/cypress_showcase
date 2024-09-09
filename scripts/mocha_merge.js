const { ArgumentParser } = require('argparse')
const generator = require('mochawesome-report-generator')
const { merge } = require('mochawesome-merge')

const parser = new ArgumentParser({
  description: 'Simple function to help merging multiple mochawesome reports generated by Cypress',
})
parser.add_argument('-a', '--app', { help: 'The app that Cypress ran against (ie, SauceLabs)'})
parser.add_argument('--build', { help: 'Build number (optional)' })
parser.add_argument('--branch', { help: 'The git branch that Cypress ran against' })
parser.add_argument('--browser', { help: 'The browser that Cypress used (ie, Chrome, Firefox)', required: true })
parser.add_argument('-e', '--environment', { help: 'The app environment Cypress ran against (ie, staging, production)', required: true })

async function mocha_merge() {
  const { app, build, branch, browser, environment } = getArgs()
  let title = `Cypress Automation for ${app} ${environment} on ${browser}.`
  title = branch !== null ? `${title} ${branch}` : title
  title = branch !== null ? `${title}#${build}` : title
  const jsonReport = await merge({ files: ['cypress/mochawesome/report/*.json'] })
  await generator.create(jsonReport, { reportDir: 'cypress/mochawesome/export', inlineAssets: false, reportTitle: title, charts: true })
}

function getArgs() {
  const args = parser.parse_args()
  args.branch = args.branch || null
  args.build = args.build || null
  return args
}

mocha_merge()
