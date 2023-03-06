const { defineConfig } = require("cypress");

module.exports = defineConfig({
    e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here   
    },
    viewportWidth: 2048,
    viewportHeight: 1536,
    defaultCommandTimeout: 30000,
    excludeSpecPattern: "path/to/**/*.js",
    specPattern: "**/*.{feature,features}"
  },
});
