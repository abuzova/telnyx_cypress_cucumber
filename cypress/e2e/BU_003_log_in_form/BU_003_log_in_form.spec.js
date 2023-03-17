/// <reference types="cypress" />
import { Given, Then } from "@badeball/cypress-cucumber-preprocessor";
import headerPage from "../pages/HeaderPage.spec";
import mainMenuPage from "../pages/MainMenuPage.spec";
import logInPage from "../pages/LogInPage.spec";

Given("I navigate to the Website", () => {

    mainMenuPage.enterURL();
    mainMenuPage.closeCookies();  
   
    cy.wait(4000); 
    headerPage.getLogInLink().should($a => {
        expect($a.attr('href'), 'href').to.equal('https://portal.telnyx.com/')
        expect($a.attr('target'), 'target').to.equal('_blank')
        $a.attr('target', '_self')
      }).click()
      cy.url().should('equal', 'https://portal.telnyx.com/#/login/sign-in')
   
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