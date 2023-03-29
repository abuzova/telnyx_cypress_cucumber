/// <reference types="cypress" />
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import headerPage from "../pages/HeaderPage.spec";
import logInPage from "../pages/LogInPage.spec";

Given("I want to navigate to telnyx.com and close cookies pop-up window", () => {
    headerPage.enterURL();
    headerPage.closeCookies();
    cy.wait(4000);         
});

Given('I want to go to the "Sign in" page', () => {   
    headerPage.getLogInLink().should($a => {
        expect($a.attr('href'), 'href').to.equal('https://portal.telnyx.com/')
        expect($a.attr('target'), 'target').to.equal('_blank')
        $a.attr('target', '_self')
    }).click()           
});

When('I am on the "Sign in" page', () => {
    cy.url().should('include', '/login/sign-in')   
    cy.wait(4000);       
});

Then("Validate login form with correct credentials", (datatable) => {
    datatable.hashes().forEach((element) => {               
        cy.wait(3000);
        logInPage.setLoginInput(element.business_email);
        logInPage.setPasswordInput(element.password);
        logInPage.clickRememberEmailCheckbox();
        //logInPage.clickLogInButton();
    });
});