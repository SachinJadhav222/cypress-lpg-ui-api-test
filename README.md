# Money Gaming Automation Test

*Test Automation for Money Gaming .This is demo test project  using cypress and jenkins / circle ci pipeline, github and other tools.
 The framework is BDD enabled using cucumber js to create feature file written in Gherkin Language*

##
**Initial Setup**

1. This is node base project , please install latest node on your system: https://nodejs.org/en/

**Set up instructions**

1. Clone the repo from https://github.com/SachinJadhav222/money-gaming-automation-test
2. run @ root folder
```shell script
   npm install 
```
3. Once installation is succesfull then we can run the test

**Run cypress Test for UI**

1. To run cypress test in dastboard :
```shell script
   npm run cy:open
```
2. To run cypress test without dash board :
```shell script
   npm run cy:run
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
4. Start test
```shell script
npm start
```
5. By default this project runs on PORT 5002; to change it kindly open app.js file and update the following line of code: -
     const PORT = process.env.PORT || 5002

6. This projct has basic authentication in place. So, the hit the endpoints you have to provide the username and password.
      username = admin
      password = admin
7. Check if application is running at:  http://localhost:5002/api/members

8. Once app is up ,go back to original project 'Money-gaming-automation-test' and run
```shell script
npm run cy:api
```

This project has Cypress dashboard for test execution and monitoring and reporting

**Cypress Dashboard :** 
 https://dashboard.cypress.io/projects/bachhp/runs/1/test-results?actions=%5B%5D&browsers=%5B%5D&groups=%5B%5D&isFlaky=%5B%5D&modificationDateRange=%7B%22startDate%22%3A%221970-01-01%22%2C%22endDate%22%3A%222038-01-19%22%7D&orderBy=EXECUTION_ORDER&oses=%5B%5D&specs=%5B%5D&statuses=%5B%5D

**Circle CI pipeline :**
This project is configured with Circle CI for CICD pipeline
 : https://app.circleci.com/pipelines/github/SachinJadhav222/money-gaming-automation-test?invite=true

**SonarCloud link :**
This project is configured with Sonar cube for code quality 
: https://sonarcloud.io/project/configuration?id=SachinJadhav222_money-gaming-automation-test

**Feature file Location :** "cypress\money-gaming-automation-test\cypress\tests\ui\\*.features"

**API Test Spec files:**
"cypress\money-gaming-automation-test\cypress\tests\api\\*.spec.js"

**Folder structure & Files**

1. .circleci : settings for circle ci , cicd pipeline
2. cypress : this folder contains :
    - config : configuration and urls
    - fixture: this is used for mock data
    - tests: this folder has all the test cases,  feature files for UI  & spec    files for API tests
   - locator: all the web elemtsn are stored here, theses are simple JS objects stored in key value pair
      file name start with prefix loc 
      e.g. loc01.homePage.js
           All the web elements in this, has name staring with loc01_ ,  loc01_join_now_button, we will be using this into the feature file. 
           Lookign at name we can find out which file this locator is coming from 
   - plugin: we can add plugin to index.js file e.g. cucmber plugin for BDD
   - support: all step definitons and support files
   - test-data : test data
3. .gitignore file : this file contaisn what should not be checkin into the repo e.g node_module folder etc
4. cypress.json : all cypress related setting found here
5. jenkinsfile: jenkins file for cicd setup
6. package.json: this file describe all dependancies and scripts for the node project
