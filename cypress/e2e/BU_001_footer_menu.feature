Feature: BU_001_footer_menu

Background:
Given I want to navigate to telnyx.com and close cookies pop-up window
When I am on the "Home" page

Scenario: I want to validate links of the footer menu items <i_element>
Then Validate the links of the left footer menu item
| links_menu_item_left_footer                |  i_element   |     
| https://telnyx.com/company/data-privacy    |      1       |
| https://telnyx.com/report-abuse            |      2       |
| https://telnyx.com/privacy-policy          |      3       |
| https://telnyx.com/cookie-policy           |      4       |
| https://telnyx.com/law-enforcement-request |      5       |
| https://telnyx.com/acceptable-use-policy   |      6       |   

Then Validate the links of the right footer menu item
| links_menu_item_right_footer               |  i_element   |
| https://telnyx.com/terms-and-conditions    |      1       |
| https://telnyx.com/release-notes           |      2       |
| /careers                                   |      3       |



