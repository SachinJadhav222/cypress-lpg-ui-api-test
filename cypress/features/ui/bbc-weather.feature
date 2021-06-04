@parentSuite("UI")
# @suite("UI_suite")
# @subSuite("UI_sub_suite")
# @epic("Behaviours epic")
# @story("Behaviours story")
Feature: BBC Weather
    As user
    I want to expolre BBC web

    Scenario: Search for the City and check weather
        Given I visit "bbcWeb"
        Then I should see page title "BBC - Home"
        And I click on menu tab "Weather"
        Then I expect to see URL containing "weather"
        And I expect to see placeholder text "Enter a town, city or UK postcode" at "search_box"
        Then I entered "Melbourne Airport, Australia{enter}" at "search_box"
        #Then I should see page title "Melbourne - BBC Weather"
        Then I get the min and max temperature of "#daylink-0"
        Then I get the min and max temperature of "#daylink-1"
        Then I get the min and max temperature of "#daylink-2"

    Scenario: Search for the POSTCODE and check weather
        Given I visit "bbcWeb"
        Then I should see page title "BBC - Home"
        And I click on menu tab "Weather"
        Then I expect to see URL containing "weather"
        And I expect to see placeholder text "Enter a town, city or UK postcode" at "search_box"
        Then I entered "RM8{enter}" at "search_box"
        #Then I should see page title "Melbourne - BBC Weather"
        Then I get the min and max temperature of "#daylink-0"
        Then I get the min and max temperature of "#daylink-1"
        Then I get the min and max temperature of "#daylink-2"


