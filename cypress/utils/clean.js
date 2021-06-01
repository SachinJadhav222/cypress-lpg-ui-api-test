const fs= require('fs-extra');
fs.emptyDir('cypress/reports');
fs.emptyDir('cypress/screenshots');
fs.emptyDir('cypress/videos');
fs.emptyDir('reports/api');
fs.remove('allure-report')
fs.remove('allure-results')

console.log('Cleaned----->>')