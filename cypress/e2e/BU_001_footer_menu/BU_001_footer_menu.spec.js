/// <reference types="cypress" />
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import footerPage from "../pages/FooterPage.spec";
import mainMenuPage from "../pages/MainMenuPage.spec";

Given('I want to navigate to telnyx.com and close cookies pop-up window', () => {
    mainMenuPage.enterURL();
    mainMenuPage.closeCookies();
});

When('I am on the "Home" page', () => {
    cy.url().should('eq', 'https://telnyx.com/');
});

Then("Validate the links of the left footer menu item", (datatable) => {
    datatable.hashes().forEach((element) => {
        footerPage.validateLeftFooterMenuItem(element.links_menu_item_left_footer, element.i_element);
    });
});
Then("Validate the links of the right footer menu item", (datatable) => {
    datatable.hashes().forEach((element) => {
        footerPage.validateRightFooterMenuItem(element.links_menu_item_right_footer, element.i_element);
    });
});