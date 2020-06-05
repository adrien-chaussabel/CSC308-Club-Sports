import { Given, Then } from 'cypress-cucumber-preprocessor/steps';

Given('I open the home page', () => {
  cy.visit('http://localhost:3000');
});

Given('I open the login page', () => {
  cy.visit('http://localhost:3000/login');
});

Then('The title should include Club Sports Hub', () => {
  cy.title().should('include', 'Club Sports');
});

Then('There should be a Tennis event at Dexter Lawn at 1:00 AM', () => {
  cy.get('div').should('contain.text', 'Dexter Lawn 01:00 AM');
});
