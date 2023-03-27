Feature: BU_005_contact_us_form

Background:
Given I want to navigate to telnyx.com and close cookies pop-up window 
Given I want to go to the "Contact us" page
When I am on the "Contact us" page

Scenario: I want to verify Talk to an expert form
Then Verify contact us form with valid credentials
| first_name | last_name |          email         |  phone_number  |     company_website     |                          additional_information                                |      reason_for_contact    |    phone_number_extension    |    use_case_form        |
|   Anna     |    Joi    |  betos15827@rolenot.com|  1234567890    |    https://info.biz.ua/ |  Lorem Ipsum is simply dummy text of the printing and typesetting industry.    |         Sales-Inquiry      |              +355            |   Programmable Network  |



        




                                    