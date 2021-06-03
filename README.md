# Cypress UI & API Automation

_Test Automation using cypress .This is demo test project using cypress and jenkins / circle ci pipeline, github and other tools. for UI and API
The framework is BDD enabled using cucumber js to create feature file written in Gherkin Language_

### Folder Structure

- [Project Root](./tree-md) : cypress-lpg-ui-api-test

  - [cypress](./cypress)
    - [config](./cypress/config) - cypress configurations 
    - [features](./cypress/features) -All bdd feature file are here
      - [api](./cypress/features/api) -feature file for API
      - [ui](./cypress/features/ui) -feature file for UI
    - [fixture](./cypress/fixtures) - Test fixtures and mock data
    - [pages](./cypress/pages) - Locators, webelements are stored per page as page object.
    - [plugin](./cypress/plugin) - plugins, injected before cypress test fires
    - [scripts](./cypress/scripts) - Cypress runners to overwire default configuration
    - [support](./cypress/support) -Steps,commands  and other supports
    - [utils](./cypress/utils) -Utility files 
  - [.env.local](./.env.local) : This file will overwirte local environment variables
  - [cypress.env.local](./cypress.env.local) : This file will overwirte default cypress configuration  
  - [cypress.json](./cypress.json) : Cypress configuration
  - [README.md](./README.md)

##

**Initial Setup**

1. This is node base project , please install latest node on your system: https://nodejs.org/en/

**Set up instructions**

1. Clone the repo from https://github.com/SachinJadhav222/cypress-lpg-ui-api-test
2. run @ root folder

```shell script
   npm install
```

3. Once installation is succesfull then we can run the cypress

**Run cypress Test**

1. To run cypress cypress in dastboard :

```shell script
   npm start
```

2. To run cypress cypress without dash board :

```shell script
   npm test
```

3. Generate Allure Report - please check allure-report folder for index.html file

```shell script
   npm run report
```

This project has Cypress dashboard for cypress execution and monitoring and reporting

**Cypress Dashboard :**

**Circle CI pipeline :**
This project is configured with Circle CI for CICD pipeline
https://app.circleci.com/pipelines/github/SachinJadhav222/cypress-lpg-ui-api-test
