const cypress = require('cypress');

const cypressConfig = {
    video: false,
    browser: 'chrome',
    config: {
        integrationFolder: 'cypress/features'
    },
    env: {
        allure: true
    }
};

const cypressCucumberConfig = {
    ...cypressConfig,
    ...{
        config: {
            integrationFolder: 'cypress/features',
            ignoreTestFiles: '*.js',
            testFiles: '**/*.{feature,features}'
        }
    }
};

(async function () {
    await cypress.run(cypressConfig);
    await cypress.run(cypressCucumberConfig);
})();
