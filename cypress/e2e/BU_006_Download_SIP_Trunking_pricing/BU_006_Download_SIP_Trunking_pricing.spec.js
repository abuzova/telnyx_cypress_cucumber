/// <reference types="cypress" />
import { Given, Then } from "@badeball/cypress-cucumber-preprocessor";
import sipTrunkingPricingPage from "../pages/SIPTrunkingPricingPage.spec";
import mainMenuPage from "../pages/MainMenuPage.spec";

Given("I want to test the Download SIP Trunking pricing functionality", () => {

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

  mainMenuPage.clickMainMenuItemPricing();
  cy.wait(4000);  
  mainMenuPage.getSubMainMenuItem(7, 3).click(); // Products -> SIP Trunking
});

Then("Verify Download SIP Trunking pricing form with valid credentials", (datatable) => {
  
  datatable.hashes().forEach((element) => {
    sipTrunkingPricingPage.setFirstNameInput(element.first_name);
    sipTrunkingPricingPage.setLastNameInput(element.last_name);
    sipTrunkingPricingPage.setEmailInput(element.email);
    sipTrunkingPricingPage.checkSubscriptionCheckbox();
    sipTrunkingPricingPage.clickSubmitButton();
    cy.url().should('eq', element.final_url)
    cy.log(element.successful_message);  /// How to report user that he should check email ???
       
  })
});
