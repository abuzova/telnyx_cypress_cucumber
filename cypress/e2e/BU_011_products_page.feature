Feature: BU_011_products_page

Background:
Given I want to navigate to telnyx.com and close cookies pop-up window
Given I want to go to the "See all products" page
When I am on the "See all products" page

Scenario: I want to validate links on the Products page
Then Validate links on the Products page <infrastructure> <infrastr_i>, <sub_infrastructure> <sub_infrastructure_i>, <sub_sub_infrastr_name> <sub_sub_infrastructure_i> <sub_sub_infrastr_url> <idValue>
Examples:
| idValue        | infrastr_i  |  infrastructure | sub_infrastructure_i | sub_infrastructure      | sub_sub_infrastructure_i | sub_sub_infrastr_name   |  sub_sub_infrastr_url                       |
| communications |     1       |  Communications |            1         | Messaging               |           1              | SMS API                 |  /products/sms-api                          |
| communications |     1       |  Communications |            1         | Messaging               |           2              | MMS API                 |  /products/mms-api                          |
| communications |     1       |  Communications |            1         | Messaging               |           3              | Short Code              |  /products/sms-short-code                   |
| communications |     1       |  Communications |            1         | Messaging               |           4              | 10DLC                   |  /products/10dlc-registration               |
| communications |     1       |  Communications |            1         | Messaging               |           5              | Alphanumeric Sender ID  |  /products/alphanumeric-sender-id           |
| communications |     1       |  Communications |            2         | Numbers                 |           1              | Global Numbers          |  /products/phone-numbers                    |
| communications |     1       |  Communications |            2         | Numbers                 |           2              | Toll-free Numbers       |  /products/toll-free-numbers                |
| communications |     1       |  Communications |            3         | Identity                |           1              | Number Lookup API       |  /products/number-lookup                    |
| communications |     1       |  Communications |            3         | Identity                |           2              | Verify API              |  /products/verify-api                       |
| communications |     1       |  Communications |            4         | Voice                   |           1              | SIP Trunking            |  /products/sip-trunks                       |
| communications |     1       |  Communications |            4         | Voice                   |           2              | Voice API               |  /products/voice-api                        |
| communications |     1       |  Communications |            5         | Fax                     |           1              | Fax API                 |  /products/fax-api                          |
| communications |     1       |  Communications |            6         | Enterprise Integrations |           1              | Microsoft Teams         |  /products/enterprise-integrations-ms-teams |
| wireless       |     2       |  Wireless       |            1         | IoT SIM Card            |           1              | IoT SIM Card            |  /products/iot-sim-card                     |
| networking     |     3       |  Networking     |            1         | Programmable Networking |           1              | Programmable Networking |  /products/programmable-networking          |
| storage        |     4       |  Storage        |            1         | Storage                 |           1              | Storage                 |  /products/storage                          |

