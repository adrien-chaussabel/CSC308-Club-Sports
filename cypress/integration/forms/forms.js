import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';

Given('I go to the forms tab', () => {
  cy.visit('http://localhost:3000/forms');
});

Then('I click on Participant Forms', () => {
  cy.get('#participant').click();
});

When('I click the Driver Application', () => {
  cy.request('https://forms.office.com/Pages/ResponsePage.aspx?id=2wING578lUSVNx03nMoq52oE0TprIP9KvKKO7ytndVpUOEZWUzlFVkg2UVhYNTZLUEdCUEgyWjJSUSQlQCN0PWcu');
});

Then('I scroll through the form', () => {
  cy.scrollTo('bottom');
});

Then('I click the Next button to continue filling out the form', () => {
  cy.get('button').click();
});
