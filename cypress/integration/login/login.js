import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';

Given('I open the login page', () => {
  cy.visit('http://localhost:3000/login');
});

When('I type a valid username', () => {
  cy.get('input#username').type('valid_username');
});

When('I enter a username that is not in the database', () => {
  cy.get('input#username').type('thisuserisnotindb');
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

Then('I should see the incorrect username or password error', () => {
  const stub = cy.stub();
  cy.on('window:alert', stub);
  cy.get('[type="submit"]').click().then(() => {
    expect(stub.getCall(0)).to.be.calledWith('Failed to authenticate user');
  });
});
