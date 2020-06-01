Feature: Login Page

@focus
Scenario: Password length not long enough when logging in
  Given I open the login page
  When I type a valid username
  When I type a short password
  When I submit the login form
  Then I should get the short password error

  @focus
Scenario: Username length not long enough when logging in
  Given I open the login page
  When I type a short username
  When I type a valid password
  When I submit the login form
  Then I should get the short username error