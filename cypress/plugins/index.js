///// <reference types="@shelex/cypress-allure-plugin" />
///// <reference types="cypress" />

const cucumber = require("cypress-cucumber-preprocessor").default;
const allureWriter = require("@shelex/cypress-allure-plugin/writer");
const { lighthouse, prepareAudit } = require("cypress-audit");

//cucumber processor
module.exports = (on, config) => {
  //console.log('This is config====>>>>',config)
  //console.log('This is ON====>>>>',on)
  on("file:preprocessor", cucumber());
  allureWriter(on, config);

  on("before:browser:launch", (browser = {}, launchOptions) => {
    prepareAudit(launchOptions);
  });

  on("task", {
    lighthouse: lighthouse(),
  });

  return config;
};

// //Allure report
// module.exports = (on, config) => {
//   allureWriter(on, config);
//   return config;
// };
