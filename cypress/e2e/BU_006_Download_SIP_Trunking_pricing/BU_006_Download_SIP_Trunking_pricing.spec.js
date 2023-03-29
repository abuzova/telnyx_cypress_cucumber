/// <reference types="cypress" />
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import sipTrunkingPricingPage from "../pages/SIPTrunkingPricingPage.spec";
import headerPage from "../pages/HeaderPage.spec";

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

  headerPage.enterURL();
  headerPage.closeCookies();
});

Given('I want to open the "Pricing" dropdown menu', () => {
  headerPage.clickMainMenuItemPricing();
  cy.wait(4000); 
});

Given('I want go to the "SIP Trunking pricing" page', () => {    
  headerPage.getSubMainMenuItem(7, 3).click(); // Pricing -> SIP Trunking pricing
  cy.wait(4000);
});

When('I am on the "SIP Trunking pricing" page', () => {
  cy.url().should('eq', 'https://telnyx.com/pricing/elastic-sip',);

});

Then("Verify Download SIP Trunking pricing form with valid credentials", (datatable) => {
  
  datatable.hashes().forEach((element) => {
    sipTrunkingPricingPage.setFirstNameInput(element.first_name);
    sipTrunkingPricingPage.setLastNameInput(element.last_name);
    sipTrunkingPricingPage.setEmailInput(element.email);
    sipTrunkingPricingPage.checkSubscriptionCheckbox();
    //sipTrunkingPricingPage.clickSubmitButton();
    //cy.url().should('eq', element.final_url)
    //cy.log(element.successful_message);  
       
  })
});
