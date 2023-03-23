Feature: BU_004_registering_form

Background:
Given I navigate to the Website

Scenario: I want to validate Registering form
Then Validate Registration form with correct data
|  i_element  | full_name | password   | company_email          |
|     1       |    Mike   | od$3802_'* | hevagoh245@necktai.com |
