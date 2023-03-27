/// <reference types="cypress" />
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import ebookVoiceApiPage from "../pages/EbookVoiceApiPage.spec";
import mainMenuPage from "../pages/MainMenuPage.spec";
import voiceApiPage from "../pages/VoiceApiPage.spec";

Given("I want to navigate to telnyx.com and close cookies pop-up window", () => {
  mainMenuPage.enterURL();
  mainMenuPage.closeCookies();
});

Given("I want to go on the Voice API page", () => {
  mainMenuPage.clickMainMenuItemProducts();
  cy.wait(4000);    
  mainMenuPage.getSubMainMenuItem(2, 5).click(); // Products -> Voice API  
});

Given("I want to go on the Ebook voice api page", () => {  
  voiceApiPage.clickDownloadEbookLink();
});

When("I am on the Ebook voice api page", () => { 
  cy.url().should('eq', 'https://telnyx.com/resources/ebook-voice-api');
});

Then("Verify Download Your Voice API eBook form with valid credentials", (datatable) => {  
  datatable.hashes().forEach((element) => {
    ebookVoiceApiPage.setFirstNameInput(element.first_name);
    ebookVoiceApiPage.setLastNameInput(element.last_name);
    ebookVoiceApiPage.setEmailInput(element.email);
    ebookVoiceApiPage.setCompanyInput(element.company)
    ebookVoiceApiPage.checkSubscriptionCheckbox(); 
  })
});