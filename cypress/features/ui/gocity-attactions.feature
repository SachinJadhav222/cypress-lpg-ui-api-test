@parentSuite("UI-Test")
# @suite("UI_suite")
# @subSuite("UI_sub_suite")
# @epic("Behaviours epic")
# @story("Behaviours story")
Feature: GoCity Attractions
    As user
    I want to expolre gocity web

    Scenario: I visit Covid-19 Travel Info Tab
        Given I visit "GoCityWeb"
       # Then I take full page screenshot
        Then I should see page title "Go Boston Pass | All-Inclusive Pass | Save Up To 55%"
        And I click on "covid19_tab"
        Then I expect to see URL containing "traveler-information"
        Then I should see page title "Things to do in Boston during COVID | COVID-19 Advice | Go City"

