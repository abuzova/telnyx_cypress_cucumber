Feature: BU_004_registering_form

Background:
Given I want to navigate to telnyx.com and close cookies pop-up window 
Given I want to go to the "Sign Up" page

When I am on the "Sign Up" page

Scenario: I want to validate Registering form
Then Validate Registration form with correct data
|  i_element  | full_name | password   | company_email          |
|     1       |    Mike   | od$3802_'* | hevagoh245@necktai.com |
