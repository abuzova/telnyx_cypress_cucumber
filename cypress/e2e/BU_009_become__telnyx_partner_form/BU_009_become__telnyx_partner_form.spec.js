/// <reference types="cypress" />
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import partnershipsPage from "../pages/PartnershipsPage.spec";
import mainMenuPage from "../pages/MainMenuPage.spec";

Given("I want to navigate to telnyx.com and close cookies pop-up window", () => {
    mainMenuPage.enterURL();
    mainMenuPage.closeCookies();       
});

Given('I want to go to the "Partnerships" page', () => {
    mainMenuPage.clickMainMenuItemWhyTelnyx();
    cy.wait(3000);      
    mainMenuPage.getSubMainMenuItem(11, 4).click(); // Why Telnyx -> Partnerships
    cy.wait(3000);   
});

When('I am on the "Partnerships" page', () => {   
    cy.url().should('eq', 'https://telnyx.com/partnerships')    
});

Then("Validate Become a Telnyx partner form with correct data", (datatable) => {
    datatable.hashes().forEach((element) => {                
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