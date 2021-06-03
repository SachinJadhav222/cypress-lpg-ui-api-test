const locators = require("./locator").locators;

export const getSelector = (selector) => {
  const selector1 = locators[selector];
  if (selector1.startsWith("//")) {
    cy.xpath(selector1);
  } else {
    cy.get(selector1);
  }
};

export const clickMenuTab = (selector) => {
  cy.xpath('//li[@class="ssrcss-so3uhw-GlobalNavigationProduct eki2hvo14"]')
    .contains(selector)
    .click();
};

export const verifyTextPresents =(expectedValue,selector)=>{
  
}

export const verifyUrlContents = (expectedValue) => {
  cy.url("include", expectedValue);
  cy.log(`url containins->`, expectedValue);
};

export const validateSchema = (schema, httpResponse) => {
  const ajv = new Ajv();
  const validate = ajv.addSchema(definitionsHelper).compile(schema);
  const valid = validate(httpResponse);

  if (!valid) {
    getSchemaError(validate.errors).then((schemaError) => {
      throw new Error(schemaError);
    });
  } else {
    cy.log("Schema validated!");
  }
};
