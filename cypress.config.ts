import { defineConfig } from 'cypress';

const setupNodeEvents = (on: Cypress.PluginEvents, config: Cypress.PluginConfigOptions) => {
  return config;
};

export default defineConfig({
  e2e: {
    baseUrl: 'https://api.restful-api.dev',
    responseTimeout: 30000,
    video: false,
    setupNodeEvents
  }
});
