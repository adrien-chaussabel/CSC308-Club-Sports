Feature: Forms Page

@focus
Scenario: Using the forms menu
  Given I go to the forms tab
  Then I click on Participant Forms

@focus
Scenario: Opening a form
  Given I go to the forms tab
  When I click the Driver Application
  Then I scroll through the form
  Then I click the Next button to continue filling out the form
 