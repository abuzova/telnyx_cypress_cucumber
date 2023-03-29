/// <reference types="cypress" />
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import allProductPage from "../pages/AllProductPage.spec";
import headerPage from "../pages/HeaderPage.spec";


Given("I want to navigate to telnyx.com and close cookies pop-up window", () => {
    headerPage.enterURL();
    headerPage.closeCookies();       
});

Given('I want to go to the "See all products" page', () => {
    headerPage.clickMainMenuItemProducts();
    cy.wait(3000);  
    headerPage.getSeeAllSubMainMenuItem(2).click(); // Products -> See all products      
});

When('I am on the "See all products" page', () => {
    cy.url().should('eq', 'https://telnyx.com/products');   
});   

Then(/^Validate links on the Products page (\w+) (\w+), (((\w+([\s]|[^\s]))+)) (\w+), ((((\w+([\s]|[-]|[^\s]))+)\w+)) (\w+) ((\W\w+\W((\w+([-]|[^-]))+))) (\w+)$/, (infrastructure, infrastr_i, sub_infrastructure, sub_infrastructure_i, sub_sub_infrastr_name, sub_sub_infrastructure_i, sub_sub_infrastr_url, idValue) => {  
    allProductPage.shouldInfrastructureLink(idValue, sub_infrastructure_i, sub_sub_infrastructure_i, sub_sub_infrastr_url);
});