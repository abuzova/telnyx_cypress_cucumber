Feature: BU_003_log_in_form

Background:
Given I want to navigate to telnyx.com and close cookies pop-up window 
Given I want to go to the "Sign in" page
When I am on the "Sign in" page


Scenario: I want to validate login form with correct credentials 
Then Validate login form with correct credentials

|  i_element  | business_email         | password   |
|     1       | hevagoh245@necktai.com | od$3802_'* |


