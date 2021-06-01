const locators = require("./locator").locators;
const { getSelector, validateSchema } = require("./commands-UI");
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
/**
 * This method will return selector lelement based on CSS or XPATH
 */
// Cypress.Commands.add("getSelector", selector => {
// 	const selector1 = locators[selector]
// 	if (selector1.startsWith('//')) {
// 		cy.xpath(selector1)
// 	} else {
// 		cy.get(selector1)
// 	}
// })
//console.log('This is commands---->>>')
Cypress.Commands.add("getSelector", getSelector);
Cypress.Commands.add("validateSchema", validateSchema);

//API Commands
Cypress.Commands.add("setHeader", setHeader);
Cypress.Commands.add("setBaseUrl", setBaseUrl);
