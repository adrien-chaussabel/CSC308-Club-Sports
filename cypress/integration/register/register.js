import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';

Given('I open the register page', () => {
  cy.visit('http://localhost:3000/register');
});

When('I type in an invalid email', () => {
  cy.get('[type="email"]').type('abcdef');
});

When('I sumbit the register form', () => {
  cy.get('button#submitRegForm').click();
});

Then('I should get an error message', () => {
  cy.get('[type="email"]').then(($input) => {
    expect($input[0].validationMessage).contains('Please include an \'@\'');
  });
});
