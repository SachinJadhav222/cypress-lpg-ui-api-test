const fs = require("fs-extra");

if (fs.existsSync("reports")) {
  fs.remove("reports");
}
if (fs.existsSync("cypress/reports")) {
  fs.remove("cypress/reports");
}
if (fs.existsSync("screenshots")) {
  fs.remove("screenshots");
}
if (fs.existsSync("cypress/screenshots")) {
  fs.remove("cypress/screenshots");
}
if (fs.existsSync("videos")) {
  fs.remove("videos");
}
if (fs.existsSync("cypress/videos")) {
  fs.remove("cypress/videos");
}
if (fs.existsSync("allure-report")) {
  fs.remove("allure-report");
}
if (fs.existsSync("allure-results")) {
  fs.remove("allure-results");
}

console.log("Cleaned----->>");
