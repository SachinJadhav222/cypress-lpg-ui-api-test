
const locators = require("./locator").locators;
const {
  getSelector,
  validateSchema,
  clickMenuTab,
  verifyUrlContents,
} = require("./commands-UI");
const {
  setBaseUrl,
  makeApiCall,
  setHeader,
  setMultipleHeaders,
  setQueryParameters,
  verifyrResponseCode,
  verifyResponseProperty,
  verifyResponseBodyContaints,
  validateResponseWithSchema,
} = require("./commands-API");

//UI commands
Cypress.Commands.add("getSelector", getSelector);
Cypress.Commands.add("validateSchema", validateSchema);
Cypress.Commands.add("clickMenuTab", clickMenuTab);
Cypress.Commands.add("verifyUrlContents", verifyUrlContents);

//API Commands
Cypress.Commands.add("setHeader", setHeader);
Cypress.Commands.add("setBaseUrl", setBaseUrl);
