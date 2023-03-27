Feature: BU_002_main_menu

Background:
Given I navigate to the Website
When I am on the Home page

Scenario: I want to check links in Products menu items
Then Validate Products main menu items links 
    | menu_link_products        |   i_element    |  
    | /products/sms-api         |       1        | 
    | /products/phone-numbers   |       2        | 
    | /products/sip-trunks      |       3        |             
    | /products/iot-sim-card    |       4        |              
    | /products/voice-api       |       5        |              
    | /products/cloud-storage   |       6        |              


Scenario: I want to check links in Pricing menu items
Then Validate Pricing main menu items links 
    | menu_link_pricing         |   i_element    |
    | /pricing/messaging        |       1        |
    | /pricing/numbers          |       2        |
    | /pricing/elastic-sip      |       3        |
    | /pricing/iot-data-plans   |       4        |
    | /pricing/call-control     |       5        |
    | /pricing/storage          |       6        |

Scenario: I want to check links in Why Telnyx menu items
Then Validate Why Telnyx main menu items links
    | menu_link_why_telnyx            |   i_element    |
    | /why-telnyx                     |        1       |
    | /our-network                    |        2       |
    | /mission-control                |        3       |
    | /partnerships                   |        4       |
    | https://marketplace.telnyx.com  |        5       |

Scenario: I want to check links in Resources menu items
Then Validate Resources main menu items links   
    | menu_link_resources               |   i_element    |
    | /customer-stories                 |       1        |
    | /resources                        |       2        |
    | https://support.telnyx.com/en/    |       3        |

Scenario: I want to check links in Developers menu items    
Then Validate Developers main menu items links     
    | menu_link_developers              |   i_element    |
    | https://developers.telnyx.com     |       1        |
    | https://community.telnyx.com      |       2        |

Scenario: I want to check links in Solutions menu items
Then Validate Solutions main menu items links 
    | menu_link_solutions          |
    | /solutions                   |

Scenario: I want to check see_all_links in Products menu items
Then Validate see_all_links in Products main menu items
    | see_all_product |  i_element |
    | /products    |     2      |   

Scenario: I want to check see_all_links in Pricing menu items
Then Validate see_all_links in Pricing main menu items
    | see_all_pricing |  i_element |
    | /pricing     |     7      |
    