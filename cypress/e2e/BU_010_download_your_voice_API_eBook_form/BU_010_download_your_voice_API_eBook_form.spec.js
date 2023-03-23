/// <reference types="cypress" />
import { Given, Then } from "@badeball/cypress-cucumber-preprocessor";
import ebookVoiceApiPage from "../pages/EbookVoiceApiPage.spec";
import mainMenuPage from "../pages/MainMenuPage.spec";
import voiceApiPage from "../pages/VoiceApiPage.spec";

Given("I want to test the Download Your Voice API eBook functionality", () => {
  mainMenuPage.enterURL();
  mainMenuPage.closeCookies(); 

  mainMenuPage.clickMainMenuItemProducts();
  cy.wait(4000);  
  mainMenuPage.getSubMainMenuItem(2, 5).click(); // Products -> Voice API
  voiceApiPage.clickDownloadEbookLink();
  cy.url().should('eq', 'https://telnyx.com/resources/ebook-voice-api');

});

Then("Verify Download Your Voice API eBook form with valid credentials", (datatable) => {
  
  datatable.hashes().forEach((element) => {
    ebookVoiceApiPage.setFirstNameInput(element.first_name);
    ebookVoiceApiPage.setLastNameInput(element.last_name);
    ebookVoiceApiPage.setEmailInput(element.email);
    ebookVoiceApiPage.checkSubscriptionCheckbox(); 
  })
});