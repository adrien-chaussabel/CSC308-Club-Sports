Feature: Login Page

@focus
Scenario: Password not entered when logging in
  Given I open the login page
  When I type a valid username
  When I submit the login form
  Then I should see an enter password error

@focus
Scenario: Username not entered when logging in
  Given I open the login page
  When I type a valid password
  When I submit the login form
  Then I should see an enter username error

@focus
Scenario: Blank form submitted
  Given I open the login page
  When I submit the login form
  Then I should see an enter username and password error

@focus
Scenario: Account not verified
  Given I open the login page
  When I enter a username that is not in the database
  When I type a valid password
  When I submit the login form
  Then I should see the incorrect username or password error