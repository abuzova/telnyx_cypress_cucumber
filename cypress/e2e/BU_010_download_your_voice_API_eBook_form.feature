Feature: BU_010_download_your_voice_API_eBook_form

Background:
Given I want to test the Download Your Voice API eBook functionality 					
Scenario: I want to download pricing

Then Verify Download Your Voice API eBook form with valid credentials
| first_name | last_name |          email         |  successful_message  |                  final_url                                                   |
|   Anna     |    Joi    |  betos15827@rolenot.com|   Check the email    |  https://telnyx.com/thank-you?formId=1922&email=hevagoh245%40necktai.com     |