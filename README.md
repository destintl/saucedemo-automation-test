# UI Automation Testing

## Test Framework 
- Playwright
- Node JS
- VS Code
- JavaScript
  
## [Local Run] Installation

### Install - Depedencies
- Install [Node]
  ```
  brew install node
   ```
- Install [NPM](https://www.npmjs.com/)

Check node.js is installed on your system `node -v`

## [Local Run] How To Run It?
It's compatible to test:

- Chrome
- Firefox
- Safari 

These are some steps to run test on local environment:
- `cd` to the base directory of this project
- run `npm ci
- run all test cases on all browsers in headless `npx playwright test` 
- run on spesific browser `npx playwright test --project chromium`
- run tests in headed mode `npx playwright test --headed`
- run a specific test file `npx playwright test ./tests/checkout.spec.js`

## View the report result HTML
1. Navigate to the Report Location:
    * Go to the `playwright-report` directory in your project folder.
2. Open the Report:
    * Open the `index.html` file in a web browser to view the test results.
