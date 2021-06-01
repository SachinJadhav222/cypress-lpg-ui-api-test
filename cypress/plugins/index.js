///// <reference types="@shelex/cypress-allure-plugin" />
/// <reference types="cypress" />

const cucumber = require('cypress-cucumber-preprocessor').default
const allureWriter = require("@shelex/cypress-allure-plugin/writer");

//cucumber processor
module.exports = (on, config) => {
  //console.log('This is config====>>>>',config)
  //console.log('This is ON====>>>>',on)
  on('file:preprocessor', cucumber())
   allureWriter(on, config);
   
   return config;

}

// //Allure report 
// module.exports = (on, config) => {
//   allureWriter(on, config);
//   return config;
// };