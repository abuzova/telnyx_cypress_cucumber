/// <reference types="cypress" />
import { Given, Then } from "@badeball/cypress-cucumber-preprocessor";
import faqPage from "../pages/FAQPage.spec";
import mainMenuPage from "../pages/MainMenuPage.spec";
beforeEach(() => {
    //cy.viewport(1600, 720);

  
});
Given("I navigate to the Website", () => {
    cy.clearCookies({log: true});
    cy.clearAllSessionStorage('your item', {log: true});
    cy.clearAllLocalStorage();
   
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

      faqPage.enterURL();
      faqPage.closeCookies();
      //cy.get('header div:nth-child(3)>nav button:nth-child(1)').click({ multiple: true });
  
      mainMenuPage.clickMainMenuItemProducts();
      cy.wait(4000);  
      mainMenuPage.getSubMainMenuItem(2, 3).click(); // Products -> SIP Trunking
      cy.wait(4000);
      cy.url().should('include', 'https://telnyx.com/products/sip-trunks')    
});
Then("Validate Frequently Asked Questions block work", (datatable) => {

    datatable.hashes().forEach((element) => {
        //cy.log(element.i_element)        
        
        faqPage.clickQuestionTitle(element.i_element);
        cy.wait(3000);
        faqPage.isVisibleDescriptionBlock(element.i_element);
        //faqPage.isHiddenDescriptionBlock(element.i_element );  // check is "The description of the previous block is hidden." Should be loop
    });

});