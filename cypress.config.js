const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    defaultCommandTimeout: 4000,
    watchForFileChanges: true,
    viewportHeight: 1080,
    viewportWidth: 1920,
    experimentalStudio:true,
    pageLoadTimeout: 5000,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
