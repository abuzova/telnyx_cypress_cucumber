/// <reference types="cypress" />
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import resourcesPage from "../pages/ResourcesPage.spec";
import headerPage from "../pages/HeaderPage.spec";

Given("I want to navigate to telnyx.com and close cookies pop-up window", () => {
    headerPage.enterURL();
    headerPage.closeCookies();           
});

Given("I navigate to the SIP Trunks page", () => { 
    headerPage.clickMainMenuItemProducts();
    headerPage.getSubMainMenuItem(2, 3).click({force: true});
    cy.wait(2000);   
}); 

When("I am on the SIP Trunks page", () => {    
    cy.url().should('eq', 'https://telnyx.com/products/sip-trunks');
});

let argString1 = "";

When("Description PYTHON block:", (dataString) => {    
    argString1 = dataString;
    cy.log(argString1);
});

Then("Verify PYTHON tab", (datatable) => {
    datatable.hashes().forEach((element) => {
        resourcesPage.clickStartBuildingTabs(element.number_i);
        resourcesPage.appearedTabDescription(element.description_i);       
    });
});

Then(/^Verify resources description PYTHON block "([^"]*)"$/, function (description_i) {
    resourcesPage.appearedCodeBlock(description_i, argString1);       
});

let argString2 = "";

When("Description RUBY block:", (dataString) => {    
    argString2 = dataString;
    cy.log(argString2);
});

Then("Verify RUBY tab", (datatable) => {
    datatable.hashes().forEach((element) => {
        resourcesPage.clickStartBuildingTabs(element.number_i);
        resourcesPage.appearedTabDescription(element.description_i);       
    });
});

Then(/^Verify resources description RUBY block "([^"]*)"$/, function (description_i) {
    resourcesPage.appearedCodeBlock(description_i, argString2);       
});

let argString3 = "";

When("Description NODE block:", (dataString) => {    
    argString3 = dataString;
    cy.log(argString3);
});

Then("Verify NODE tab", (datatable) => {
    datatable.hashes().forEach((element) => {
        resourcesPage.clickStartBuildingTabs(element.number_i);
        resourcesPage.appearedTabDescription(element.description_i);       
    });
});

Then(/^Verify resources description NODE block "([^"]*)"$/, function (description_i) {
    resourcesPage.appearedCodeBlock(description_i, argString3);       
});

let argString4 = "";

When("Description PHP block:", (dataString) => {    
    argString4 = dataString;
    cy.log(argString4);
});

Then("Verify PHP tab", (datatable) => {
    datatable.hashes().forEach((element) => {
        resourcesPage.clickStartBuildingTabs(element.number_i);
        resourcesPage.appearedTabDescription(element.description_i);       
    });
});

Then(/^Verify resources description PHP block "([^"]*)"$/, function (description_i) {
    resourcesPage.appearedCodeBlock(description_i, argString4);       
});

let argString5 = "";

When("Description .NET block:", (dataString) => {    
    argString5 = dataString;
    cy.log(argString5);
});

Then("Verify .NET tab", (datatable) => {
    datatable.hashes().forEach((element) => {
        resourcesPage.clickStartBuildingTabs(element.number_i);
        resourcesPage.appearedTabDescription(element.description_i);       
    });
});

Then(/^Verify resources description .NET block "([^"]*)"$/, function (description_i) {
    resourcesPage.appearedCodeBlock(description_i, argString5);       
});


let argString6 = "";

When("Description CURL block:", (dataString) => {    
    argString6 = dataString;
    cy.log(argString6);
});

Then("Verify CURL tab", (datatable) => {
    datatable.hashes().forEach((element) => {
        resourcesPage.clickStartBuildingTabs(element.number_i);
        resourcesPage.appearedTabDescription(element.description_i);       
    });
});

Then(/^Verify resources description cURL block "([^"]*)"$/, function (description_i) {
    resourcesPage.appearedCodeBlock(description_i, argString6);       
});