Feature: Open the website

@focus
Scenario: Invalid email format when registering
  Given I open the register page
  When I type in an invalid email
  When I sumbit the register form
  Then I should get an error message