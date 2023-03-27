Feature: BU_010_download_your_voice_API_eBook_form

Background:
Given I want to navigate to telnyx.com and close cookies pop-up window 
Given I want to go on the Voice API page
Given I want to go on the Ebook voice api page
When I am on the Ebook voice api page

Scenario: I want to download voice API eBook
Then Verify Download Your Voice API eBook form with valid credentials
| first_name | last_name |          email         |  successful_message  |                  final_url                                                   | company      |
|   Anna     |    Joi    |  betos15827@rolenot.com|   Check the email    |  https://telnyx.com/thank-you?formId=1922&email=hevagoh245%40necktai.com     | Test Company |