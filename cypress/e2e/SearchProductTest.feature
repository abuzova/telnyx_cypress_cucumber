Feature: Search Product

Background:
Given I navigate to the Website

Scenario: I want to search the product in home page
When Search the blog
| blog |
| Cypress |
Then Verify correct blog name searched
| searchValue |
| Cypress |