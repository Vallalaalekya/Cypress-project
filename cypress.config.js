const { defineConfig } = require("cypress");
//const cucumber = require('cypress-cucumber-preprocessor').default;


async function setupNodeEvents(on, config){
 // on('file:preprocessor', cucumber())
  return config;
}




module.exports = defineConfig({
  e2e: {
    setupNodeEvents,
      // implement node event listeners here
    specPattern:'cypress/integration/basics/day1/frameworks/*.js'
    //cypress/integration/basics/day1/assignments/day1.js
    //cypress/integration/basics/day1
    //cypress/integration/basics/day1/frameworks
  }
});
