/// <reference types="cypress" />
import { Given, Then } from "@badeball/cypress-cucumber-preprocessor";
import homePage from "../pages/HomePage.spec";

beforeEach(() => {
    cy.viewport(1600, 720);
});
Given("I navigate to the Website", () => {
    homePage.enterURL();
    homePage.closeCookies();
});

Then("Validate Products main menu items links", (datatable) => {
    homePage.clickMainMenuItemProducts();
    let j_element_products = 2;
    datatable.hashes().forEach((element) => {
        homePage.validateMenusProducts(element.menu_link_products, j_element_products, element.i_element);
    });
});

Then("Validate Pricing main menu items links", (datatable) => {
    homePage.clickMainMenuItemPricing(); 
    let j_element_pricing = 7;   
    datatable.hashes().forEach((element) => {
        homePage.validateMenusPricing(element.menu_link_pricing, j_element_pricing, element.i_element);
    }); 
})

Then("Validate Why Telnyx main menu items links", (datatable) => {
    homePage.clickMainMenuItemWhyTelnyx();
    let j_element_why_telnyx = 11;
    datatable.hashes().forEach((element) => {
        homePage.validateMenusWhyTelnyx(element.menu_link_why_telnyx, j_element_why_telnyx, element.i_element);
    }); 
})

Then("Validate Resources main menu items links", (datatable) => {
    homePage.clickMainMenuItemResources();
    
    datatable.hashes().forEach((element) => {
        homePage.validateMenusResources(element.menu_link_resources, element.i_element);
    }); 
})

Then("Validate Developers main menu items links", (datatable) => {
    homePage.clickMainMenuItemDevelopers();
    
    datatable.hashes().forEach((element) => {
        homePage.validateMenusDevelopers(element.menu_link_developers, element.i_element);
    }); 
})

Then("Validate Solutions main menu items links", (datatable) => {    
    datatable.hashes().forEach((element) => {
        homePage.validateMenuSolutions(element.menu_link_solutions);
    }); 
})

Then("Validate see_all_links in Products main menu items", (datatable) => {
    homePage.clickMainMenuItemProducts();
    datatable.hashes().forEach((element) => {
        homePage.validateMenuSeeAll(element.see_all_product, element.i_element);
    }); 
})

Then("Validate see_all_links in Pricing main menu items", (datatable) => {
    homePage.clickMainMenuItemPricing(); 
    datatable.hashes().forEach((element) => {
        homePage.validateMenuSeeAll(element.see_all_pricing, element.i_element);
    }); 
})
    