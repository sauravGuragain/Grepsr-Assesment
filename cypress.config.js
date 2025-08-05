const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    specPattern: "cypress/e2e/**/*.cy.js",  // include all .cy.js files in e2e and subfolders
    setupNodeEvents(on, config) {
      // implement node event listeners here if needed
    },
  },
});
