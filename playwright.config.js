const { defineConfig, devices } = require('@playwright/test');
const { loadGlobalSettings } = require('./globalSetting');

// Load global settings before exporting the config


module.exports = defineConfig({
  testDir: './tests', // Directory containing your tests
  fullyParallel: true,
// normalement   forbidOnly: !!process.env.CI, // Forbid `test.only` on CI servers

  forbidOnly: false, // Forbid `test.only` on CI servers
  use: {
    trace: 'on-first-retry', // Generate a trace only if a test fails on the first retry
    actionTimeout: 10000, // Timeout for individual actions like clicks
    navigationTimeout: 20000, // Timeout for navigation actions
    baseURL: process.env.BASE_URL, // Use BASE_URL from .env
  },
  projects: [
    {
      name: 'chromium',
      use: {
        headless: false,
      },
    },
    // Uncomment for additional configurations
    // {
    //   name: 'mobile-chrome',
    //   use: {
    //     browserName: 'chromium',
    //     ...devices['Pixel 5'], // Use Playwright's built-in Pixel 5 device descriptor
    //     headless: false, // Optionally run in headful mode for debugging
    //   },
    // },
  ],
});
