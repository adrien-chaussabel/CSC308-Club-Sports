import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';

Given('I open the login page', () => {
  cy.visit('http://localhost:3000/login');
});

When('I type a short username', () => {
  cy.get('input#username').type('u1');
});

When('I type a valid username', () => {
  cy.get('input#username').type('example_user_123');
});

When('I type a short password', () => {
  cy.get('[type="password"]').type('p');
});

When('I type a valid password', () => {
  cy.get('[type="password"]').type('password');
});

When('I submit the login form', () => {
  cy.get('[type="submit"]').click();
});

Then('I should get the short password error', () => {
  cy.get('p#error').should('has.text', 'Error: Password should be at least 5 characters long');
});

Then('I should get the short username error', () => {
  cy.get('p#error').should('has.text', 'Error: Username should be at least 5 characters long');
});
