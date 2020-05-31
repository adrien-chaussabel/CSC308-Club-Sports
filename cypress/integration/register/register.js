import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';

Given('I open the register page', () => {
  cy.visit('http://localhost:3000/register');
});

When('I type in a valid first name', () => {
  cy.get('input#firstname').type('John');
});

When('I type in a valid last name', () => {
  cy.get('input#lastname').type('Smith');
});

When('I type in a valid password', () => {
  cy.get('[type="password"]').type('password');
});

When('I type in an invalid password', () => {
  cy.get('[type="password"]').type('abc');
});

When('I type in an invalid email', () => {
  cy.get('[type="email"]').type('abcdef');
});

When('I type in a valid email', () => {
  cy.get('[type="email"]').type('example@valid.com');
});

When('I type in a valid username', () => {
  cy.get('input#username').type('example_user_123');
});

When('I select a user type', () => {
  cy.get('input#student').click();
});

When('I submit the register form', () => {
  cy.get('[type="submit"]').click();
});

Then('I should get the invalid email error alert', () => {
  cy.get('[type="email"]').then(($input) => {
    expect($input[0].validationMessage).contains('Please include an \'@\'');
  });
});

Then('I should get an error for no first name', () => {
  cy.get('p#error').should('has.text', 'Error: Please enter your first name');
});

Then('I should get an error for no last name', () => {
  cy.get('p#error').should('has.text', 'Error: Please enter your last name');
});

Then('I should get an error for no username', () => {
  cy.get('p#error').should('has.text', 'Error: Please enter a username');
});

Then('I should get an error for short password', () => {
  cy.get('p#error').should('has.text', 'Error: Password should be at least 5 characters long');
});
