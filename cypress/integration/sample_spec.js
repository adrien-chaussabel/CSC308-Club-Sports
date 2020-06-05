describe('My first test', () => {
  it('Does not do much', () => {
    expect(true).to.equal(true);
  });
});

describe('GIVEN I want to visit the CP Club Sports website', () => {
  it('WHEN I paste the link, THEN the website loads', () => {
    cy.visit('http://localhost:3000');
  });
});
