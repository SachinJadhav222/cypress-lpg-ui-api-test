const locators = require("./locator").locators;

export const getSelector = (selector) => {
  const selector1 = locators[selector];
  if (selector1.startsWith("//")) {
    cy.xpath(selector1);
  } else {
    cy.get(selector1);
  }
};

export const validateSchema=(schema,httpResponse)=>{
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
}
