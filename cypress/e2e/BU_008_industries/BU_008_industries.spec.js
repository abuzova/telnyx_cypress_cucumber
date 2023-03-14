/// <reference types="cypress" />
import { Given } from "@badeball/cypress-cucumber-preprocessor";
import mainMenuPage from "../pages/MainMenuPage.spec";


Given("I navigate to the Website", () => {
      mainMenuPage.enterURL();
      mainMenuPage.closeCookies();
      cy.log('Hello word!!!')         
});

