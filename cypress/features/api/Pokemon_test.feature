@API
Feature: Pokemon GET /pokemon/{pokemon_name or id}
    Background: Set the base url
        Given I set base URL as "pokemon_api"
    
    @smoke @test
    Scenario: Fetch data for a pokemon using API and verify it
        Then I set header "Content-Type" as "application/json"
        Given I GET "/pikachu"
        Then Verify response status code is 200
       # And Response body should be valid according to schema file "./cypress/fixtures/json-schema/poki-schema.json"
        And Verify response details for Pokemon "pikachu"


    @smoke @test @negative
    Scenario: Fetch data for an invalid pokemon using API and verify it
        Given I GET "/doraemon"
        Then Verify response status code is 404