## Setup

### Install Dependencies

### Get the project from Github

1. Install latest `node` LTS 

2. Clone the repo
```git clone git@github.com:alexzavg/cypress_showcase.git```

3. Install the dependencies
```yarn install```

## Running Tests

To run tests with a GUI:
```yarn cy:open```

To run tests headless on the command line:
```yarn cy:run```

## Running Tests In Github CI

1. Go to URL: https://github.com/alexzavg/cypress_showcase/actions/workflows/tests.yaml

2. Click "Run Workflow" button to the right

3. Select a branch to run from, then click "Run Workflow" green button

4. Wait for the workflow to complete and for the report to be generated

5. To view report visit URL: https://alexzavg.github.io/cypress_showcase/mochawesome.html
