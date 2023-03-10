/// <reference types="cypress" />
import { Given, Then } from "@badeball/cypress-cucumber-preprocessor";
import footerPage from "../pages/FooterPage.spec";
beforeEach(() => {
    cy.viewport(1600, 720);
});
Given("I navigate to the Website", () => {
    footerPage.enterURL();
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