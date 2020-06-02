import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';

Given('I open the login page', () => {
  cy.visit('http://localhost:3000/login');
});

When('I type a valid username', () => {
  cy.get('input#username').type('valid_username');
});

When('I type a valid password', () => {
  cy.get('[type="password"]').type('password');
});

When('I submit the login form', () => {
  cy.get('[type="submit"]').click();
});

Then('I should see an enter password error', () => {
  cy.get('p#error').should('has.text', 'Error: Please enter a password');
});

Then('I should see an enter username error', () => {
  cy.get('p#error').should('has.text', 'Error: Please enter a username');
});

Then('I should see an enter username and password error', () => {
  cy.get('p#error').should('has.text', 'Error: Please enter a usernameError: Please enter a password');
});
