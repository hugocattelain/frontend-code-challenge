# McMakler code challenge
Candidate: Hugo Cattelain
Time spent on the challenge: 6h25

## Informations
The list of advertisements is fetched in src/app/components/Container.
As the public API url does not allow CORS, the data are fetched from a json file (src/app/utils/data.json). A set of 10 advertisement if picked in the list and displayed to avoid corrupted datas.

## Running the project
from the root directory
```
npm install
npm start
```

## Tech stack
### React
React was chosen for its scalability and its module based architecture

### Material-ui.
Provide a library of React components that implement Google's Material Design

### SASS
CSS Preprocessor used for its convenience of usage.

### ESLint + ESLint React plugin
Javascript linter to produce quality code.
The ESLint React plug-in is used in order to avoid React-specific syntax interpreted as errors (for instance no-unused-vars for React modules).
Basic rules used: no-unused-vars, semi, indent, linebreak-style

### Boostrap
Used for the grid layer in order to display the advertisement Cards.
