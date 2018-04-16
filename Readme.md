## Cypress Project

<dl>
  <dt>Overview</dt>
  <dd>This testing project for showing how REACT Web App can be used on Cypress Testing Framework</dd>

  <dt>Files</dt>
  <dd>react-boilerplate: Cloned from Github: react-boilerplace</dd>
  <dd>cypress-web-test: Cypress Testing for the REACT Web App</dd>
  <dd>cypress-aws-test: Cypress Testing for the REACT Web App using AWS Features</dd>
  <dd>aws-scripts: All the AWS related scripts, using Node.Js</dd>


## Quick start
#### React Web App

1. Clone this repo using `git clone --depth=1 https://github.com/react-boilerplate/react-boilerplate.git`
2. Move to the appropriate directory: `cd react-boilerplate`.<br />
3. Run `npm run setup` in order to install dependencies and clean the git repo.<br />
   *We auto-detect `yarn` for installing packages by default, if you wish to force `npm` usage do: `USE_YARN=false npm run setup`*<br />
   *At this point you can run `npm start` to see the example app at `http://localhost:3000`.*
4. Run `npm run clean` to delete the example app.

#### Cypress Testing

1. Open a specific folder for cypress Testing
2. Run `npm run cypress:open` to do the testing in the Chrome
3. Run `npm run cypress:run` to do the testing in the terminal
