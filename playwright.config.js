// @ts-check
import { defineConfig, devices } from '@playwright/test';
import { trace } from 'node:console';


/**
 * @see https://playwright.dev/docs/test-configuration
 */
 const config=({
  testDir: './tests',
  timeout: 40000,
  screenshot: "only-on-failure",
  trace:'retain-on-failure',
  expect:{
    timeout:40000
  },
  reporter: 'html',
  use:{
    browserName:'chromium',
    headless: false,
  },
});

module.exports=config

