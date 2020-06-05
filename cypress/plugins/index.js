// ignoring eslint errors here because this syntax is required by cucumer

// eslint-disable-next-line spaced-comment
/// <reference types="cypress" />

const cucumber = require('cypress-cucumber-preprocessor').default;

// eslint-disable-next-line no-unused-vars
module.exports = (on, config) => {
  on('file:preprocessor', cucumber());
};
