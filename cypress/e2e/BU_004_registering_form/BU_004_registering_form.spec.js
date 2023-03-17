/// <reference types="cypress" />
import { Given, Then } from "@badeball/cypress-cucumber-preprocessor";
import registrationPage from "../pages/RegistrationPage.spec";
import headerPage from "../pages/HeaderPage.spec";

Given("I navigate to the Website", () => {

      headerPage.enterURL();
      headerPage.closeCookies();
        
      headerPage.clickSignUpItem();
      cy.wait(4000);
      cy.url().should('include', 'https://telnyx.com/sign-up')    
});
Then("Validate Registration form with correct data", (datatable) => {

    datatable.hashes().forEach((element) => {      
        cy.wait(3000);
        registrationPage.setCompanyEmailInput(element.company_email);
        registrationPage.setFullNameInput(element.full_name);
        registrationPage.setPasswordInput(element.password);
        registrationPage.checkTermsAndConditionsCheckbox();
        registrationPage.checkSubscriptionCheckbox();
        //registrationPage.clickSignUpButton();       
    });

});