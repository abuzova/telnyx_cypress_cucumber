/// <reference types="cypress" />
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import faqPage from "../pages/FAQPage.spec";
import mainMenuPage from "../pages/MainMenuPage.spec";

Given("I want to navigate to telnyx.com and close cookies pop-up window", () => {    
        // inspect the caught error
        cy.on('uncaught:exception', (e, runnable) => {
            console.log('error is', e);
            console.log('runnable', runnable);
            if(e.message.includes('Minified React error #423') || e.message.includes('Minified React error #418')) {
            // we expected this error, so let's ignore it
            // and let the test continue           
                return false;                   
            }
            // on any other error message the test fails
        })  

    mainMenuPage.enterURL();
    mainMenuPage.closeCookies();      
});

Given('I want to open the "Products" dropdown menu', () => {  
      mainMenuPage.clickMainMenuItemProducts();
      cy.wait(4000);       
});

Given('I want go to the "SIP Trunking" page', () => {      
      mainMenuPage.getSubMainMenuItem(2, 3).click(); // Products -> SIP Trunking
      cy.wait(4000);     
});

When('I am on the "SIP Trunking" page', () => {
    cy.url().should('include', 'https://telnyx.com/products/sip-trunks')    
});

Then("Validate Frequently Asked Questions block work", (datatable) => {
    datatable.hashes().forEach((element) => { 
        faqPage.clickQuestionTitle(element.i_element);
        cy.wait(3000);
        faqPage.isVisibleDescriptionBlock(element.i_element);   
    });
});