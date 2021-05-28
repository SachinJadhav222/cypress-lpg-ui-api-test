@signUp
Feature: Visit Money Gaming Web app and sign up

   As a user
   I want to Sign up to app

   @error_message
   Scenario: Required filed error message validation
      Given I visit "moneyGamingWeb"
      Then I should see page title "Play Online Casino Games Now | MoneyGaming.com"
      Then I click on "loc01_join_now_button"
      Then I should see "loc02_registration_journey" is visible
      #user details
      Then I select "Mr" from dropdown at "loc02_title_dropdown"
      Then I entered "John" at "loc02_first_name"
      Then I entered "Doe" at "loc02_surname"
      Then I click on "loc02_accept_terms_checkbox"
      Then I click on "loc02_join_now_button"
      #field error
      Then I should see "This field is required" at "loc02_required_filed_ERROR"
     







