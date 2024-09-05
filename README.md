## Setup

### Install Dependencies

1. `node` and `npm` latest node LTS (currently v12.18.2): for running the server [download the 64-bit mac osx .pkg install image](https://nodejs.org/en/download/)

1. `brew` (Homebrew): for installing other package dependencies
```/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"```

1. `yarn`: for building package dependencies
```brew install yarn --without-node```

### Get the project from Github

1. Clone the repo
```git clone git@github.com:alexzavg/cypress_showcase.git```

2. Install the dependencies
```yarn install```

3. Re-run `yarn install` every time a `git pull` shows a change to `yarn.lock`

## Running Tests

Be sure that a CYPRESS_BASE_URL is set in your .env to indicate the url to run your tests against.

To run tests with a GUI:
```yarn cy:open```

To run tests headless on the command line:
```yarn cy:run```

## Mocha Report Generation

This project is capable of generating [mocha awesome reports](https://www.npmjs.com/package/mochawesome). It is intended to be used in CI workflows, but can be run manually when needed.

Commands:
- `yarn mocha:migrate`: moves or "migrates" the screenshots and the video files to the mocha awesome report
- `yarn mocha:merge`: merges all mocha JSON report files into a single HTML page
- `yarn mocha:generate`: generates the HTML "mochawesome" report (runs both merge and migrate)
- `yarn mocha:reset`: deletes all current mocha-related files (clean slate)

Recommended Command Sequence:
1. `yarn mocha:reset`
2. `yarn cy:run` (or whatever run command you want for cypress)
3. `yarn mocha:generate`