const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    defaultCommandTimeout: 20000, 
    requestTimeout: 25000, // Increase API request timeout
    pageLoadTimeout: 30000, // Increase page load timeout
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
