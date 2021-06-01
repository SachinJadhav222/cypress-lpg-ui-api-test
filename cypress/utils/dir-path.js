const fs = require("fs");

const featureFilePathUI = "./cypress/features/ui";
const featureFilePathAPI = "./cypress/features/api";
const stepsPath = "./cypress/support/step_definitions";

if (!fs.existsSync(featureFilePathUI)) {
  fs.mkdirSync(featureFilePathUI);
}
if (!fs.existsSync(featureFilePathAPI)) {
  fs.mkdirSync(featureFilePathAPI);
}
if (!fs.existsSync(stepsPath)) {
  fs.mkdirSync(stepsPath);
}

module.exports = {
  featureFilePathUI,
  featureFilePathAPI,
  stepsPath
}; 
