# McMakler code challenge
Candidate: Hugo Cattelain

## Tech stack

### React
React was chosen for its scalability and its module based architecture

### Material-ui.
Provide a library of React components that implement Google's Material Design

### SASS
CSS Preprocessor used for its convenience of usage

### ESLint + ESLint React plugin
Javascript linter to produce quality code.
The ESLint React plug-in is used in order to avoid React-specific syntax interpreted as errors (for instance no-unused-vars for React modules).

## Informations
The API request have been proxied to http://localhost:5000 in package.json.

Checking the absence of recipient state from the body of the post request on '/tasks' (in the if statement) was missing and have been added.

The date format validation in the form is not implemented.

## Running the project
```
npm install
npm i nodemon -g
yarn
yarn dev
```
React
SASS
Material-ui with Card component
ESLint + ESLint plugin React (avoiding no-unused-vars for React modules)
