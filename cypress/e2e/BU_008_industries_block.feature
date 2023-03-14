Feature: BU_008 industries block

Background:
Given I navigate to the Website
Given I navigate to the Solutions page

Scenario Outline: I want to verify that links are correct at the industries block
When I am on the Solutions page
Then Verify links at the industries block
Examples:
|      link                                   |    first_articles_link    |
|      Hello                                  |   ggggg |
#|     /solutions/retail-and-ecommerce         |  /solutions/healthcare    | 
#|     /solutions/logistics-and-transportation |
#|     /solutions/travel-and-hospitality       |
#|     /solutions/financial-services           |