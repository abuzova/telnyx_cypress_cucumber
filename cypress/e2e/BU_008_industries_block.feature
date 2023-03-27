Feature: BU_008 industries block

Background:
Given I navigate to the Website
Given I navigate to the Solutions page
When I am on the Solutions page

Scenario: I want to verify that link of the first article block are correct at the industries block

Then Verify link at the industries first article block 
|  first_articles_link     |
|  /solutions/healthcare   |

Scenario Outline: I want to verify that links are correct at the industries block
Then Verify links at the industries block <link> <i_number>
Examples:
| i_number |      link                                   |
|    1     |     /solutions/retail-and-ecommerce         |  
|    2     |     /solutions/logistics-and-transportation | 
|    3     |     /solutions/travel-and-hospitality       |
|    4     |     /solutions/financial-services           | 