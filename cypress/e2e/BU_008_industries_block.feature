Feature: BU_008 industries block

Background:
Given I navigate to the Website
Given I navigate to the Solutions page
When I am on the Solutions page

Scenario: I want to verify that link of the article 1 is correct at the Industries block

Then Verify link at the industries first article block 
|  first_articles_link     |
|  /solutions/healthcare   |

Scenario Outline: I want to verify that link of the article <article> is correct at the Industries block
Then Verify links at the industries block <link> <i_number>
Examples:
| i_number |      link                                   | article |
|    1     |     /solutions/retail-and-ecommerce         |    2    |  
|    2     |     /solutions/logistics-and-transportation |    3    | 
|    3     |     /solutions/travel-and-hospitality       |    4    |
|    4     |     /solutions/financial-services           |    5    | 