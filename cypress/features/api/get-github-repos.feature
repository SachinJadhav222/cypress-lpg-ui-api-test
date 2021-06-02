@parentSuite("API-Test")
Feature: Get GitHub Repos

    Background: Set GIT HUB base url
        Given I set base URL as "git_hub"

    Scenario: GET Git Hub Repos
        Then I set header "Content-Type" as "application/json"
        Then I set header "Authorization" as "git_token"
        And  I set query parameters as:
            | parameter | value   |
            | sort      | created |
        When I GET "/users/sachinjadhav222/repos"
        Then Verify response status code is 200

