///// <reference types="@bahmutov/cy-api" />

//const getUrl = require("../../config/urls/urls");
//const getSecrets = require("../../config/secrets/secret");
//const chalk = require("chalk");

//const path= require('path');

//let fixturesDirectory = "./cypress/fixtures/json-schema";
const {getPokiSchema}=require( '../fixtures/schema/poki-schema');
//import {definitionsHelper} from './../../fixtures/schema/schema-definitions'
const Ajv= require('ajv') 
require('dotenv').config();
let fixturesDirectory = "";
let headers = {};
let queryParameters = {};
let basicAuthParameters = {};
let requestOptions = {};
let httpResponse = {};
let base_url ="";

const setBaseUrl = function(url) {
  //base_url = getUrl[url];
  base_url = Cypress.env(url);
  //cy.log("\nBase URL-->>", base_url);
};

const setHeader = function(headerName, headerValue) {

  if (headerName == "Authorization") {
    headerValue = process.env.git_token;
  }
  let valuesArray = [];
  if (headers[headerName]) {
    valuesArray = headers[headerName].split(",");
  }
  valuesArray.push(headerValue);

  headers[headerName] = valuesArray.join(",");
};

const setMultipleHeaders = function(headerTable) {
  let headerObject = {};
  headerTable.forEach((h) => {
    headerObject[h.headerName] = h.headerValue;
  });
  headers = Object.assign(headers, headerObject);
};

const setQueryParameters = function(queryTable) {
  let queryObject = {};
  queryTable.forEach((q) => {
    queryObject[q.parameter] = q.value;
  });
  queryParameters = Object.assign(queryParameters, queryObject);
};

const setBasicAuthParameters = function(username, password) {
  basicAuthParameters.username = "username";
  basicAuthParameters.password = "password";
};

const setRequestOptions = function(method, resource) {
  requestOptions.method = method;
  requestOptions.url = base_url + resource;
  requestOptions.headers = headers;
  requestOptions.failOnStatusCode = false;
};

const verifyrResponseCode = function(statusCode) {
  expect(httpResponse.status).to.eq(statusCode);
  //console.log(httpResponse.body[0])
 // cy.log("Request --->", JSON.stringify(requestOptions));
 // cy.log("Response --->", JSON.stringify(httpResponse.body));
};

const verifyResponseProperty = function(expectedValue) {
  //console.log("This is expected Response-->", httpResponse);
};

const verifyResponseBodyContaints = function(expectedValue) {
  // expect(httpResponse.body[0]).should('include',expectedValue);
  // expect(httpResponse.body[0]).to.have.property('title',expectedValue);
  //cy.contains(httpResponse.body,expectedValue);
  //expect(httpResponse.body[0]).to.include(expectedValue)
  expect(httpResponse.status).to.eq(200);
  //cy.log("Response --->", JSON.stringify(httpResponse));
};

const getSchemaError = (getAjvError) => {
  return cy.wrap(
    `Field: ${getAjvError[0]["dataPath"]} is invalid. Cause: ${getAjvError[0]["message"]}`
  );
};

const validateResponseWithSchema = function(schemaFile, callback) {
  const ajv = new Ajv();
  //const validate = ajv.addSchema(definitionsHelper).compile(getPokiSchema);
  const validate = ajv.compile(getPokiSchema);
  cy.log(getPokiSchema)
  const valid = validate(httpResponse.body);
  cy.log(httpResponse)

  if (!valid) {
    cy.log("Schema NOT Valid!");
   
  } else {
    cy.log("Schema validated!");
  }

  // if (!valid) {
  //   cy.log("Schema NOT Valid!");
  //   getSchemaError(validate.errors).then((schemaError) => {
  //     throw new Error(schemaError);
  //   });
  // } else {
  //   cy.log("Schema validated!");
  // }
  // const fs= require('fs');
  // const path= require('path');

  // fs.readFile(path.join(fixturesDirectory, schemaFile), "utf8", function(err,jsonSchemaString) {
    
  //   if (err) {
  //     callback(err);
  //   } else {
  //     const jsonSchema = JSON.parse(jsonSchemaString);
  //     const responseBody = JSON.parse(self.getResponseObject().body);

  //     const validate = jsonSchemaValidator(jsonSchema, { verbose: true });
  //     const success = validate(responseBody);
  //     cy.log('Schema Validation -->',success)
  //    // callback(getAssertionResult(success, validate.errors, null, self));
  //   }
  // });
};

const makeApiCall = function(method, resource) {
  setRequestOptions(method, resource);
  //setBasicAuthParameters(1,2);
  if (Object.keys(queryParameters).length > 0) {
    requestOptions.qs = queryParameters;
  }
  if (Object.values(basicAuthParameters).length > 0) {
    requestOptions.auth = basicAuthParameters;
  }

  cy.api(requestOptions).as("get_response_data");
  cy.get("@get_response_data").should((response) => {
    httpResponse = Object.assign(httpResponse, response);
    // cy.log("Request --->", JSON.stringify(requestOptions));
    // cy.log("Response --->", JSON.stringify(httpResponse));
  });
};

module.exports = {
  setBaseUrl,
  makeApiCall,
  setHeader,
  setMultipleHeaders,
  setQueryParameters,
  verifyrResponseCode,
  verifyResponseProperty,
  verifyResponseBodyContaints,
  validateResponseWithSchema
};
