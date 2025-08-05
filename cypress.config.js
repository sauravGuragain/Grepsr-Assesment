const { defineConfig } = require("cypress");
const mochawesome = require("mochawesome");

module.exports = defineConfig({
  reporter: "mochawesome",
  reporterOptions: {
    reportDir: "cypress/reports/mochawesome-report",
    overwrite: true,
    html: true,
    json: true,
  },

  e2e: {
    specPattern: "cypress/e2e/**/*.cy.js",
    setupNodeEvents(on, config) {
      
      on("after:run", (results) => {
        console.log(`Test run complete: ${results.totalPassed} passed, ${results.totalFailed} failed`);
      });

      on("before:run", (details) => {
        console.log("Starting test run for spec(s):", details);
      });
      
      return config;
    },
  },
});
