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
    specPattern:('cypress/integration/basics/day1/MASAIPROJECT/*.js')
   // cypress/integration/basics/day1/MASAIPROJECT
   //cypress/integration/basics/day1/MASAIPROJECT/DAY1.JS
  }
});
