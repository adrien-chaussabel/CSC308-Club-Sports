Feature: Open the website

@focus
Scenario: Show the home page
  Given I open the home page
  Then The title should include Club Sports Hub
  Then There should be a Rugby Event at Stanford at 2:00 pm
  