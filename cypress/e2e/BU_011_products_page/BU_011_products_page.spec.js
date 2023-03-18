/// <reference types="cypress" />
import { Given, Then } from "@badeball/cypress-cucumber-preprocessor";
import allProductPage from "../pages/AllProductPage.spec";
import headerPage from "../pages/HeaderPage.spec";

Given("I navigate to the Website", () => {   

    headerPage.enterURL();
    headerPage.closeCookies();     
  
    headerPage.clickMainMenuItemProducts();
    cy.wait(3000);  
    headerPage.getSeeAllSubMainMenuItem(2).click(); // Products -> See all products
    cy.wait(3000);
    cy.url().should('eq', 'https://telnyx.com/products');   
});

Then(/^Validate links on the Products page (\w+) (\w+), (((\w+([\s]|[^\s]))+)) (\w+), ((((\w+([\s]|[-]|[^\s]))+)\w+)) (\w+) ((\W\w+\W((\w+([-]|[^-]))+))) (\w+)$/, (infrastructure, infrastr_i, sub_infrastructure, sub_infrastructure_i, sub_sub_infrastr_name, sub_sub_infrastructure_i, sub_sub_infrastr_url, idValue) => {
  
cy.log(infrastructure);
    cy.log(infrastr_i);
    cy.log(sub_infrastructure);
    cy.log(sub_infrastructure_i);
    cy.log(sub_sub_infrastr_name);
    cy.log(sub_sub_infrastructure_i);
    cy.log(sub_sub_infrastr_url);   
    
    allProductPage.shouldInfrastructureLink(idValue, sub_infrastructure_i, sub_sub_infrastructure_i, sub_sub_infrastr_url);

});