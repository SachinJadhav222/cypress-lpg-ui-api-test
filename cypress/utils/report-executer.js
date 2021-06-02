const fs = require("fs");
const getEnvVeriables =require('./getEnvVeriables').getEnvVeriables
const executerMetaData = {};
executerMetaData['name']=getEnvVeriables('SDET')
executerMetaData['buildName']=getEnvVeriables('PROJECT')

const json = JSON.stringify([executerMetaData]);
fs.writeFileSync("allure-report/widgets/executors.json", json);
