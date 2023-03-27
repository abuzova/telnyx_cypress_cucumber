/// <reference types="cypress" />
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import mainMenuPage from "../pages/MainMenuPage.spec";
import headerPage from "../pages/HeaderPage.spec";
import registrationPage from "../pages/RegistrationPage.spec";

Given("I want to navigate to telnyx.com and close cookies pop-up window", () => {
    mainMenuPage.enterURL();
    mainMenuPage.closeCookies(); 
});

Given('I want to go to the "Sign Up" page', () => {
    headerPage.clickSignUpItem();
    cy.wait(4000);
});

When('I am on the "Sign Up" page', () => {
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