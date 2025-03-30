# Workflow repo for the CA

A web development workflow powered by TailwindCSS, Playwright, Vitest, and other tools for building, testing, and debugging applications.

## Features

- **Live Development Server**: Easily preview your application with `live-server`.
- **TailwindCSS Integration**: Quickly style your application with the power of TailwindCSS.
- **Testing Suite**: Includes unit testing with Vitest and end-to-end testing with Playwright.
- **Code Quality Tools**: Enforces code consistency with ESLint and Prettier.
- **Husky & Lint-Staged**: Pre-commit hooks to ensure quality before pushing changes.

## Installation

To get started, clone this repository and install the dependencies:

```
git clone https://github.com/SanderNilsen/workflow-repo-ca.git
cd workflow-repo
npm install
```

## Scripts
### Development

Start Live Server: Runs a development server to preview your app.
```
npm start
```

Watch TailwindCSS: Compiles your TailwindCSS styles in real-time.
```
npm run dev
```

### Testing

Run Unit Tests: Execute all Vitest unit tests.
```
npm test
```

Run E2E Tests: Use Playwright for end-to-end testing.
```
npm run e2e
```

Interactive E2E UI: Launch the Playwright test runner UI for easier debugging.
```
npm run e2e:ui
```

Headed Mode: Run Playwright tests with a visible browser window.
```
npm run e2e:headed
```

Debug Mode: Run Playwright tests in debug mode.
```
npm run e2e:debug
```

### Pre-commit Hooks
This project uses Husky and Lint-Staged to ensure code quality:
Automatically formats and lints JavaScript and HTML files before committing.

## Environment Variables
The project uses environment variables to store sensitive information like test credentials. Create a .env file in the root directory and add the required keys:

```env
TEST_USER_EMAIL=your-email@example.com
TEST_USER_PASSWORD=your-password
```

