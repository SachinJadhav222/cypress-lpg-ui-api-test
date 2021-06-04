@parentSuite("NFT")

Feature: BBC Web Performance
    As user
    I want to expolre BBC web

    Scenario: Check BCC web performance-Standerd
        Given I visit "bbcWeb"
        Then I should see page title "BBC - Home"
        Then I perform lighthouse analysis
    
    Scenario: Check BCC web performance-Custome
        Given I visit "bbcWeb"
        Then I should see page title "BBC - Home"
        Then I perform custome lighthouse analysis
       

