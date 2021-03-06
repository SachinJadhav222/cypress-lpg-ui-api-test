///<reference types="../../support"/>
/////<reference types="cypress"/>

import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
const { printTableUsingHash } = require("./ui-helper");

Given("I visit {string}", (URL) => {
  cy.visit(Cypress.env(URL));
});
Then("I perform lighthouse analysis", () => {
  cy.lighthouse();
});
Then("I perform custome lighthouse analysis", () => {
  const customThresholds = {
    performance: 50,
    accessibility: 50,
    seo: 70,
    "first-contentful-paint": 2000,
    "largest-contentful-paint": 3000,
    "cumulative-layout-shift": 0.1,
    "total-blocking-time": 500,
  };

  const desktopConfig = {
    formFactor: "desktop",
    screenEmulation: { disabled: true },
  };
  cy.lighthouse(customThresholds, desktopConfig);
});

Then("I check Accessibility of the page", () => {
  const A11Y_OPTIONS = {
    runOnly: {
      type: "tag",
      values: ["wcag21aa", "wcag2aa", "best-practice", "section508"],
    },
  };
  cy.injectAxe();
  cy.checkA11y(A11Y_OPTIONS);

  // cy.get(".cypress-wrapper").each((element, index) => {
  //   cy.checkA11y(".cypress-wrapper", {
  //     runOnly: {
  //       type: "tag",
  //       values: ["wcag2a"],
  //    },
  //   });
  // });
});

Then("I entered {string} at {string}", (expectedValue, selector) => {
  cy.getSelector(selector).type(expectedValue);
});

Then("I click on {string}", (selector) => {
  cy.getSelector(selector).click();
});

Then("I click on menu tab {string}", (menu_tab) => {
  cy.clickMenuTab(menu_tab);
});

Then("I shloud see home page", () => {
  cy.get("#account_summary_tab").should("be.visible");
});

Then("I expect to see URL containing {string}", (expectedValue) => {
  cy.verifyUrlContents(expectedValue);
  //cy.url('include',expectedValue)
});

Then("I should see {string} at {string}", (expectedValue, selector) => {
  cy.getSelector(selector)
    .should("be.visible")
    .and("contain", expectedValue);
});

Then("I should see {string} is visible", (selector) => {
  cy.getSelector(selector).should("be.visible");
});

Then("I should see page title {string}", (expectedValue) => {
  cy.title().should("eq", expectedValue);
});

Then("I scrolled to bottom", () => {
  cy.scrollTo("bottom");
});

Then(
  "I select {string} from dropdown at {string}",
  (expedtedValue, selector) => {
    cy.getSelector(selector).select(expedtedValue);
  }
);
Then("I expect to see placeholder text {string} at {string}", function(
  expectedValue,
  selector
) {
  cy.getSelector(selector)
    .invoke("attr", "placeholder")
    .should("contain", expectedValue);
  //cy.getSelector(selector).should('have.text', expectedValue);
});

Then("I get the min and max temperature of {string}", function(selector) {
  let cls = ".wr-value--temperature--c";
  let clstype = ".wr-weather-type__icon";
  //let day=cy.get(selector);
  cy.get(selector)
    .find(cls)
    .then(function($elm) {
      cy.log("Temperature range-->>");
      cy.log($elm.text());
    });

  cy.get(selector)
    .find(clstype)
    .then(function($elm) {
      cy.log("Weather warning-->>");
      cy.log($elm.text());
    });
});

Given("Print using rowHash", function(table) {
  console.log(table.rowsHash());
  cy.log(table.rowsHash());
});
Given("Print using row", function(table) {
  console.log(table.rows());
  cy.log(table.rows());
});
Given("Print using hashes", function(table) {
  console.log(table.hashes());
  cy.log(table.hashes());
});
Given("Print using empty object", function(table) {
  printTableUsingHash(table);
});
