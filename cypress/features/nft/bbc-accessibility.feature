@parentSuite("NFT")

Feature: BBC Web Accessibility
    As user
    I want to expolre BBC web

    Scenario: Check BCC Home Page Accessibility
        Given I visit "bbcWeb"
        Then I should see page title "BBC - Home"
        Then I check Accessibility of the page
    


