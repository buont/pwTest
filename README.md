# pwTest

**pwTest** is a learning project for experimenting with end-to-end test automation using [Playwright](https://playwright.dev/). It is designed to explore Playwright's capabilities in a structured way, using environment-based configuration and common testing patterns like Page Object Models.

> ⚠️ This is not a production-ready framework — it’s a sandbox for learning Playwright and test structuring techniques.

## 🚀 Features

- Basic setup for Playwright E2E testing
- Environment-specific configuration using `.env` files and the `dotenv` package
- Modular folder structure: `pages/`, `tests/`, `fixtures/`, `configs/`
- Simple CLI usage for switching between environments

## 📁 Project Structure

```
pwTest/
├── .github/workflows/     # (Optional) GitHub Actions CI/CD configs
├── configs/               # Environment-specific .env files
├── fixtures/              # Pages fixtures for Page Object Model
├── pages/                 # Page Object Models (POMs)
├── tests/                 # Test suites
├── playwright.config.js   # Playwright configuration file
├── package.json           # Dependencies and scripts
└── .env                   # (Optional) Default .env
```

## ⚙️ Configuration with dotenv

The project uses [dotenv](https://www.npmjs.com/package/dotenv) to manage environment variables. Configuration files are located in the `configs/` directory and are loaded dynamically based on the `ENV` variable you provide.

Example file: `configs/prod.env`

```env
BASE_URL=https://example.com
USERNAME=demo_user
PASSWORD=demo_pass
```

In `playwright.config.js`, environment variables are loaded like this:

```js
require('dotenv').config({ path: `configs/${process.env.ENV || 'prod'}.env` });
```

## 🧪 Running Tests

Use the following command to run tests for a specific environment:

```bash
ENV=prod npx playwright test
```

For Windows (PowerShell):

```powershell
$env:ENV="prod"
npx playwright test
```

To run a specific test file:

```bash
ENV=staging npx playwright test tests/login.spec.js
```

To open the HTML report after the test run:

```bash
npx playwright show-report
```

## 🧱 Test Design

- Tests are placed in the `tests/` folder
- Page Object Models go under `pages/`
- Static data for tests can be stored in `fixtures/`
- Environment settings go in `configs/` as `.env` files

## 📚 Purpose

This project exists purely for learning and experimenting with Playwright. It’s a playground to:

- Practice using Playwright APIs
- Explore multi-environment test setups
- Learn to structure tests using POM and fixtures
