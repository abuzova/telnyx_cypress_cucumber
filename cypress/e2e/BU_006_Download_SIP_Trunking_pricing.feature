Feature: BU_006_Download_SIP_Trunking_pricing

Background:
Given I want to test the Download SIP Trunking pricing functionality 					
Scenario: I want to download pricing

Then Verify Download SIP Trunking pricing form with valid credentials
| first_name | last_name |          email         |  successful_message  |                  final_url                                                   |
|   Anna     |    Joi    |  betos15827@rolenot.com|   Check the email    |  https://telnyx.com/thank-you?formId=1989&email=betos15827%40rolenot.com     |