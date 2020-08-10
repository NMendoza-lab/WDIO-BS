Feature: Performing a functional test flow for leap production


    Background:

        Given I am on the Leap landing Page

    Scenario Outline: Scenario Outline name: Performing an E2E operation
        When I click on <product>
        And  I click on apply now on the product details page
        Then I allow location access
        And I wait for step 1 page to load
        


    
        Examples:
        |product|
        |"Easy Access"|



    