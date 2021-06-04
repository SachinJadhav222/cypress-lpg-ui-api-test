@parentSuite("API")
Feature: Get the city Attraction using REST API

    As QA
    I want to check REST API response
   Background: Set Base URL
       Given I set base URL as "lpg_url"

    Scenario: Get All Citys
        Then I set header "Content-Type" as "application/json"
        Then I set header "User-agent" as "lpg"
        Then I set multiple headers as:
            | headerName   | headerValue      |
            | Content-type | application/json |
            | User-agent   | sachin-123       |
        When I GET "/citys"
        Then Verify response status code is 200
        Then Verify response body should contain "London"

    Scenario: Get All Attraction for NewYork City
        Given I set query parameters as:
            | parameter | value |
            | cityId    | 1     |
        When I GET "/attractions"
        Then Verify response status code is 200
        
        Then Verify response body should contain "New York"

    Scenario: Get All Museum for NewYork City and sort with rationgs in decending order
        Given I set query parameters as:
            | parameter | value  |
            | cityId    | 1      |
            | type      | MUSEUM |
            | _sort     | rating |
            | _order    | desc   |
        When I GET "/attractions"
        Then Verify response status code is 200
        Then Verify response body should contain "New York"
