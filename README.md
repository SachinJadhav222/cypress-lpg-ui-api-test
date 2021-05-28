# Cypress UI & API Automation 

*Test Automation using cypress  .This is demo test project  using cypress and jenkins / circle ci pipeline, github and other tools. for UI and API
 The framework is BDD enabled using cucumber js to create feature file written in Gherkin Language*

### Folder Structure
* [Project Root](./tree-md) : cypress-lpg-ui-api-test
    * [reports](./reports)  : Cucumber HTML reports
    * [cypress](./cypress)
        * [config](./cypress/config) - webdriver configurations , urls
        * [features](./cypress/features) -All bdd feature file are here
          * [api](./cypress/features/api) -feature file for API
          * [ui](./cypress/features/ui) -feature file for UI
        * [fixture](./cypress/fixtures) - Test fixtures and mock data
        * [locators](./cypress/locators) - Locators, webelements are stored per page as page object.
        * [steps](./cypress/steps) - Step defition files
        * [support](./cypress/support) - Support and helpers  files
        * [utils](./cypress/utils) - Utility files
  * [.env.local](./.env.local) : This file will overwirte local environment variables 
  * [cypress.env.local](./cypress.env.local) : This file will overwirte local environment variables 
  * [cypress.json](./cypress.json) : Cypress configuration 
  * [README.md](./README.md)
 
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
   npm cypress 
 ```
3. Similary various scripts can be found on package.json file

**API Test Setup**
1. Clone demo Rest API app: https://github.com/SachinJadhav222/demo-api-aa
2. Run setup into this project root
```shell script
npm install
```
3. Install nodemon globally by opening terminal and running the following command :
```shell script
npm install nodemon -g
```
4. Start cypress
```shell script
npm start
```
5. By default this project runs on PORT 5002; to change it kindly open app.js file and update the following line of code: -
     const PORT = process.env.PORT || 5002

6. This projct has basic authentication in place. So, the hit the endpoints you have to provide the username and password.
      username = admin
      password = admin
7. Check if application is running at:  http://localhost:5002/api/members

8. Once app is up ,go back to original project 'Money-gaming-automation-cypress' and run
```shell script
npm run cy:api
```

This project has Cypress dashboard for cypress execution and monitoring and reporting

**Cypress Dashboard :** 
 

**Circle CI pipeline :**
This project is configured with Circle CI for CICD pipeline
 :

**SonarCloud link :**
This project is configured with Sonar cube for code quality 
:



