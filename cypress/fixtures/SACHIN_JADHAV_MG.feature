# This feature is based on simple approach 
# We are sending input value and web element itself through step definition
# e.g.  Then I entered "John" at "loc2_first_name"
#   In the above step we are entering "John" (this is input value)  and  "loc2_first_name" is web element  stored into separate file.
#   In step definition we read the input value, and we get the web element form locator file and then perform action.
#   With this approach coding and maintenance gets fairly easy.


# Feature: Password validation feature

#    As a user
#    I want to check validity of the password 

#    Scenario Outline: Invalid password error message
#       Given I visit "moneyGamingWeb"
#       Then I should see page title "Play Online Casino Games Now | MoneyGaming.com"
#       Then I click on "loc01_join_now_button"
#       Then I should see "loc02_registration_journey" is visible
#       #user details
#       Then I select "Mr" from dropdown at "loc02_title_dropdown"
#       Then I entered "John" at "loc02_first_name"
#       Then I entered "Doe" at "loc02_surname"
#       Then I entered "01-January-1981" at "loc02_dob"
#       Then I entered "johndoe@gmail.com" at "loc02_email"
#       Then I entered "Trafalgar Square" at "loc02_address1"
#       Then I entered "London" at "loc02_city"

#       # user name and password 
#       Then I entered "john123" at "loc02_username"
#       Then I entered "<invalid_password>" at "loc2_password1"
#       #field error
#       Then I should see "<password_error_messsage>" at "loc02_required_filed_ERROR"
      
#       #confirm password
#       Then I entered "<invalid_password>" at "loc2_passwordConfirm"
#       #field error
#       Then I should see "<password_error_messsage>" at "loc02_required_filed_ERROR"

#       Examples:
#           | invalid_password       | password_error_messsage                                                                                  | 
#           |  Pass                  | Password must be at least 6 characters long with at least one number and at least one special character  |
#           |  Password              | Password must be at least 6 characters long with at least one number and at least one special character  |
#           |  Password123           | Password must be at least 6 characters long with at least one number and at least one special character  | 
#           |  Password##            | Password must be at least 6 characters long with at least one number and at least one special character  |
      
    
#     Scenario Outline: Both Password value does  NOT match
#       Given I visit "moneyGamingWeb"
#       Then I should see page title "Play Online Casino Games Now | MoneyGaming.com"
#       Then I click on "loc01_join_now_button"
#       Then I should see "loc02_registration_journey" is visible
#       #user details
#       Then I select "Mr" from dropdown at "loc2_title_dropdown"
#       Then I entered "John" at "loc02_first_name"
#       Then I entered "Doe" at "loc02_surname"
#       Then I entered "01-January-1981" at "loc02_dob"
#       Then I entered "johndoe@gmail.com" at "loc02_email"
#       Then I entered "Trafalgar Square" at "loc02_address1"
#       Then I entered "London" at "loc02_city"

#       # user name and password 
#       Then I entered "john123" at "loc02_username"
#       Then I entered "<first_password>" at "loc2_password1"
#       Then I entered "<cofirm_password>" at "loc2_passwordConfirm"
    
#       #field error
#       Then I should see "<password_error_messsage>" at "loc02_required_filed_ERROR"

#       Examples:
#           | first_password   |  confirm_password  | password_error_messsage |                                                                                 | 
#           |  Password#123    | 123#password       | Both Password must match |