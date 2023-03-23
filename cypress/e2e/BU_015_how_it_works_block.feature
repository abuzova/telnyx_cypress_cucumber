Feature: BU_015_how_it_works_block
 
Background:
Given I want to navigate to telnyx.com and close cookies pop-up window 
Given I want to go to the "Solutions" page


Scenario Outline: I want to verify How it works block
Given I want go to the "Account notifications" page
When I am on the "Account notifications" page
Then  Checking correct data in How it works <number> subblock
Examples:
    | number |    title_of_article                     |    describe_of_article                                                                                                                                                                                                                                          |        
    |   1    |  Build logic into your application      |  Set up triggers in your application to send account-related notifications at specific times or based on specific events, such as a status update on a package. Connect these to the set-and-forget Telnyx Messaging API.                                       | 
#    |   2    |  Your app tells Telnyx to send an alert |  Based on your logic, Telnyx will trigger a text message notification to your customer. This could be anything from appointment reminders to customer notices.                                                                                                  |
#    |   3    |  Capture all your customer responses    |  With 2-way SMS numbers, customers can respond by replying to the SMS with whatever logic you like, for example a “Y” to confirm attendance of an appointment. This allows you to manage the customer experience beyond mobile apps, push or web notifications. |
#    |   4    |  Reply as needed and when needed        |  You can reply to a customer as you see fit via the Messaging API. You can even port or host an existing customer service number for a fully integrated customer experience.                                                                                    |

