# QA Cypress Evaluation
QA automated testing evaluation project using Cypress.io

### How do I use this repo?

- Clone a copy of the `ruthlesshelp/qa-cypress-eval` repo locally
- Navigate to the `qa-cypress-eval` folder
- Run `nvm use` command
- Run `npm i` command
- Run `npm run cypress` command

### The First Scenario

- Open the browser
- Visit https://demoqa.com/autocomplete/
- Find that page's entry title
- Make sure the text is "Autocomplete"

### Description of tests

I have automated functional scenarios in order to achieve maximum test coverage for the application. The tests scenarios consists of verifying that the application components are present and visible in the application and the functionality of components is working as expected.

# Features:
- The tests are structured as per the area of the application to improve readability
- Reusability of code is given much importance so that when there is a change in application, it can be incorporated in the test framework with change in minimum place
- Descriptive names are variables/constants are used
- Cypress custom commands are used. Please refer to /support/commands.js file for details.
- Application URL is used from property defined in cypress.json file.
- Efficient locator strategies are used to locate elements in application.
- Various cypress commands and assertions are used for verification in tests.
