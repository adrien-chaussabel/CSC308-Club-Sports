Feature: Register Page

@focus
Scenario: Invalid email format when registering
  Given I open the register page
  When I type in an invalid email
  When I submit the register form
  Then I should get the invalid email error alert

@focus
Scenario: No first name when registering
  Given I open the register page
  When I type in a valid last name
  When I type in a valid email
  When I type in a valid username
  When I type in a valid password
  When I select a user type
  When I submit the register form
  Then I should get an error for no first name

@focus
Scenario: Register with a password less than 5 characters
  Given I open the register page
  When I type in a valid first name
  When I type in a valid last name
  When I type in a valid email
  When I type in a valid username
  When I type in an invalid password
  When I select a user type
  When I submit the register form
  Then I should get an error for short password
