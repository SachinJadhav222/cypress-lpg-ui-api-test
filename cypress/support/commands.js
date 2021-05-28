const locators = require('./locator').locators
/**
 * This method will return selector lelement based on CSS or XPATH
 */
Cypress.Commands.add("getSelector", selector => {
	const selector1 = locators[selector]
	if (selector1.startsWith('//')) {
		cy.xpath(selector1)
	} else {
		cy.get(selector1)
	}
})
