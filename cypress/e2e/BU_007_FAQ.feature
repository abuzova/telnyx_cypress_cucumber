Feature: BU_007_FAQ

Background:
Given I want to navigate to telnyx.com and close cookies pop-up window 
Given I want to open the "Products" dropdown menu 
Given I want go to the "SIP Trunking" page
When I am on the "SIP Trunking" page


Scenario: I want to validate FAQ accordion
Then Validate Frequently Asked Questions block work

|  i_element  |
|     2       |
|     3       |
|     4       |
|     5       |
|     6       |
|     7       |
|     1       |