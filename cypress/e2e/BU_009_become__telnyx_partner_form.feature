Feature: BU_009_become__telnyx_partner_form

Background:
Given I navigate to the Website

Scenario: I want to validate Become a Telnyx partner form with correct data
Then Validate Become a Telnyx partner form with correct data

|  i_element  |  firstName | lastName | company   |   email                   | phoneNumberExtension | phoneNumberBase | partnerType | additionalInformation                                                                                                                                                                                                                                  |
|     1       |   Anna     |    Joy   | Company_1 |   hevagoh245@necktai.com  |        +358          |   00000000      |  Reseller   | Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.  |
#|     2       |   Mike     |    Bad   | Company_2 |   mevopi7699@huvacliq.com |        +216          |   11111111      |  MSP        | There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.                                             |

