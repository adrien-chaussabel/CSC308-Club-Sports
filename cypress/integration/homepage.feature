Feature: Open the website

@focus
Scenario: Events tab loaded
  Given I open the home page
  Then The title should include Club Sports Hub
  Then There should be a Tennis event at Dexter Lawn at 1:00 AM

