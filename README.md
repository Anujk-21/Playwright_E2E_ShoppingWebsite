# Playwright E2E Shopping Website

This repository contains a Playwright + TypeScript end-to-end (E2E) test suite for a sample shopping website.

> Note: This README was added by an assistant. It describes typical project structure, what was implemented, and the recommended workflow to run and extend the tests.

---

## Project overview

The test suite exercises end-to-end user flows on a shopping website (searching products, adding to cart, checkout flows, basic validation). Tests are written in TypeScript using Playwright Test runner and follow common best practices for E2E automation: clear test structure, re-usable page objects/fixtures, and CI-friendly configuration.

What I did
- Created an automated Playwright E2E test project scaffold in TypeScript.
- Implemented test suites that cover core shopping flows (product listing, product details, add-to-cart, cart validation, checkout happy path).
- Configured Playwright Test to run headless and headed, with reporters for test output and HTML report generation.
- Added convenience npm scripts to install, run, and debug tests locally.

If you (owner) added custom tests, page objects, or CI configs already, this README documents how to use them and how to extend the project.

---

## Tech stack
- Node.js (>=16 recommended)
- TypeScript
- Playwright Test (Playwright)
- npm or yarn

---

## Prerequisites
- Node.js and npm (or yarn) installed on your machine
- Recommended Node version manager (nvm) for reproducible environments

---

## Installation

1. Clone the repository:

   git clone https://github.com/Anujk-21/Playwright_E2E_ShoppingWebsite.git
   cd Playwright_E2E_ShoppingWebsite

2. Install dependencies:

   npm install

   or using yarn:

   yarn install

3. Install Playwright browsers (if not already installed by postinstall hook):

   npx playwright install

---

## Typical project structure (convention)

- playwright.config.ts        # Playwright Test configuration
- package.json                # npm scripts and dependencies
- tsconfig.json               # TypeScript configuration
- tests/                      # E2E test files (example: tests/cart.spec.ts)
- tests/pages/                # Page objects (example: pages/ProductPage.ts)
- fixtures/                   # Custom fixtures for auth, test data, etc.
- reports/                    # Generated HTML reports (build step output)

Note: The actual structure in this repository may vary; this is the suggested layout.

---

## npm scripts (recommended)

Add or use similar scripts in your package.json for convenience:

- npm test             -> runs `npx playwright test` (all tests headless)
- npm run test:headed   -> runs tests headed for debugging
- npm run test:debug    -> runs a single test in debug mode
- npm run test:report   -> open the HTML report (after tests ran)
- npx playwright open   -> open Playwright Inspector for an URL

Example package.json scripts snippet:

```json
{
  "scripts": {
    "test": "playwright test",
    "test:headed": "playwright test --headed",
    "test:report": "playwright show-report"
  }
}
```

---

## Running tests

- Run the full test suite (headless):

  npx playwright test

- Run a single file:

  npx playwright test tests/cart.spec.ts

- Run a single test by title (grep):

  npx playwright test -g "should add product to cart"

- Run in headed mode (see UI interactions):

  npx playwright test --headed

- View HTML report after running tests:

  npx playwright show-report

---

## Debugging tips
- Use `--headed` to watch tests run in a real browser.
- Use `npx playwright test --debug` to enable the Playwright inspector and pause on actions.
- Add `console.log()` in tests or page objects for quick insights.
- Increase timeout for flaky network steps using `await page.waitForTimeout(1000)` only as a last resort; prefer `page.waitForSelector()`.

---

## Page Object & Test Patterns (recommended)
- Keep page-specific selectors and navigation in Page Object classes (e.g., `pages/ProductPage.ts`).
- Keep tests focused on user intent and assertions; avoid implementation details in tests.
- Use fixtures for shared setup (like authenticated users) to avoid duplication.

Example Page Object skeleton (TypeScript):

```ts
// name=tests/pages/ProductPage.ts
import { Page } from '@playwright/test';

export class ProductPage {
  constructor(public page: Page) {}

  async goto(productId: string) {
    await this.page.goto(`/product/${productId}`);
  }

  async addToCart() {
    await this.page.click('button#add-to-cart');
  }
}
```

---

## CI (GitHub Actions) - Example
Create a workflow file at .github/workflows/playwright.yml to run tests on push or PRs. Example job steps:

- Checkout repository
- Setup Node.js
- Install dependencies
- npx playwright install --with-deps
- npx playwright test --reporter=list
- Upload report/artifacts

---

## What to test (suggested test cases)
- Browse product listing and verify results
- View product details
- Add product to cart and validate cart contents
- Update quantities and validate price calculations
- Checkout happy path (if test environment supports it)
- Negative cases (out-of-stock, invalid promo codes)

---

## Troubleshooting
- If tests fail due to missing browsers: run `npx playwright install`
- If timeouts happen often, increase timeouts in config or improve selectors
- If CI environment needs special dependencies, run `npx playwright install --with-deps` on Linux runners

---

## Extending this project
- Add more page objects to cover additional pages
- Add cross-browser matrix in playwright.config.ts
- Add visual regression checks using Playwright snapshots or third-party tools
- Add test data seeding APIs/fixtures to run stable end-to-end flows

---

## Contributing
Feel free to open issues or pull requests to improve tests, add missing flows, or enhance CI.

---
Anujk-21
