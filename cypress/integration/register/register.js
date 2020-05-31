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
  cy.get('[type="email"]').type('example@valid.com');
});

When('I select a user type', () => {
  cy.get('input#student').select();
});

When('I sumbit the register form', () => {
  cy.get('[type="submit"]').click();
});

Then('I should get an error message', () => {
  cy.get('[type="email"]').then(($input) => {
    expect($input[0].validationMessage).contains('Please include an \'@\'');
  });
});
