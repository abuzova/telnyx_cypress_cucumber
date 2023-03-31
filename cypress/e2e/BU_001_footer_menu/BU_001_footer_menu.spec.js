/// <reference types="cypress" />
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import footerPage from "../pages/FooterPage.spec";

Given('I want to navigate to telnyx.com and close cookies pop-up window', () => {
    footerPage.enterURL();
    footerPage.closeCookies();
});

When('I am on the "Home" page', () => {
    cy.url().should('eq', 'https://telnyx.com/');
});

Then("Validate links of the left footer menu item", (datatable) => {
    datatable.hashes().forEach((element) => {
        footerPage.validateLeftFooterMenuItem(element.links_menu_item_left_footer, element.i_element);
    });
});
Then("Validate links of the right footer menu item", (datatable) => {
    datatable.hashes().forEach((element) => {
        footerPage.validateRightFooterMenuItem(element.links_menu_item_right_footer, element.i_element);
    });
});