const fs = require("fs");
require("dotenv").config();

const executerMetaData = {};
executerMetaData['name']=process.env['SDET'];
executerMetaData['buildName']=process.env['PROJECT'];

const json = JSON.stringify([executerMetaData]);
fs.writeFileSync("allure-report/widgets/executors.json", json);
