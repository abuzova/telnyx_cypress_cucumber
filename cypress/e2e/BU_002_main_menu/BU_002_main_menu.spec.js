/// <reference types="cypress" />
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import headerPage from "../pages/HeaderPage.spec";

Given("I navigate to the Website", () => {
    headerPage.enterURL();
    headerPage.closeCookies();
});

When("I am on the Home page", () => {
    cy.url().should('eq', 'https://telnyx.com/');
});

Then("Validate Products main menu items links", (datatable) => {
    headerPage.clickMainMenuItemProducts();
    let j_element_products = 2;
    datatable.hashes().forEach((element) => {
        headerPage.validateMenusProducts(element.menu_link_products, j_element_products, element.i_element);
    });
});

Then("Validate Pricing main menu items links", (datatable) => {
    headerPage.clickMainMenuItemPricing(); 
    let j_element_pricing = 7;   
    datatable.hashes().forEach((element) => {
        headerPage.validateMenusPricing(element.menu_link_pricing, j_element_pricing, element.i_element);
    }); 
})

Then("Validate Why Telnyx main menu items links", (datatable) => {
    headerPage.clickMainMenuItemWhyTelnyx();
    let j_element_why_telnyx = 11;
    datatable.hashes().forEach((element) => {
        headerPage.validateMenusWhyTelnyx(element.menu_link_why_telnyx, j_element_why_telnyx, element.i_element);
    }); 
})

Then("Validate Resources main menu items links", (datatable) => {
    headerPage.clickMainMenuItemResources();
    
    datatable.hashes().forEach((element) => {
        headerPage.validateMenusResources(element.menu_link_resources, element.i_element);
    }); 
})

Then("Validate Developers main menu items links", (datatable) => {
    headerPage.clickMainMenuItemDevelopers();
    
    datatable.hashes().forEach((element) => {
        headerPage.validateMenusDevelopers(element.menu_link_developers, element.i_element);
    }); 
})

Then("Validate Solutions main menu items links", (datatable) => {    
    datatable.hashes().forEach((element) => {
        headerPage.validateMenuSolutions(element.menu_link_solutions);
    }); 
})

Then("Validate see_all_links in Products main menu items", (datatable) => {
    headerPage.clickMainMenuItemProducts();
    datatable.hashes().forEach((element) => {
        headerPage.validateMenuSeeAll(element.see_all_product, element.i_element);
    }); 
})

Then("Validate see_all_links in Pricing main menu items", (datatable) => {
    headerPage.clickMainMenuItemPricing(); 
    datatable.hashes().forEach((element) => {
        headerPage.validateMenuSeeAll(element.see_all_pricing, element.i_element);
    }); 
})
    