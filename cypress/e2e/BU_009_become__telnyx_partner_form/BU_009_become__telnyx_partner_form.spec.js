/// <reference types="cypress" />
import { Given, Then } from "@badeball/cypress-cucumber-preprocessor";
import partnershipsPage from "../pages/PartnershipsPage.spec";
import mainMenuPage from "../pages/MainMenuPage.spec";
beforeEach(() => {
    //cy.viewport(1600, 720);

  
});
Given("I navigate to the Website", () => {

    mainMenuPage.enterURL();
    mainMenuPage.closeCookies();
    mainMenuPage.clickMainMenuItemWhyTelnyx();
    cy.wait(3000);
      
    mainMenuPage.getSubMainMenuItem(11, 4).click(); // Products -> SIP Trunking
    cy.wait(3000);
    cy.url().should('eq', 'https://telnyx.com/partnerships')    
});
Then("Validate Become a Telnyx partner form with correct data", (datatable) => {

    datatable.hashes().forEach((element) => {
        //cy.log(element.i_element)        
        partnershipsPage.setFirstNameInput(element.firstName);
        partnershipsPage.setLastNameInput(element.lastName);
        partnershipsPage.setCompanyInput(element.company);
        partnershipsPage.setEmailInput(element.email);
        partnershipsPage.setPhoneNumberExtensionSelect(element.phoneNumberExtension);
        partnershipsPage.setPhoneNumberBaseInput(element.phoneNumberBase);
        partnershipsPage.setPartnerTypeSelect(element.partnerType);
        partnershipsPage.setAdditionalInformationInput(element.additionalInformation);
        //cy.wait(3000);
        partnershipsPage.checkSubscriptionCheckbox();
        //partnershipsPage.clickApplyNowButton();
    });

});