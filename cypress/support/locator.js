const merge = require("deepmerge");
const homePage = require("../pages/homePage");
const signUpPage = require("../pages/signUpPage");
const contactUsPage = require("./../pages/contactUsPage");

//const locators = merge.all([homePage, signUpPage,contactUsPage]);
const locators = merge.all([
  require("../pages/homePage"),
  require("../pages/signUpPage"),
  require("./../pages/contactUsPage"),
]);

module.exports = {
  locators: locators,
};
