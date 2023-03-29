/// <reference types="cypress" />
import { Given, When, Then  } from "@badeball/cypress-cucumber-preprocessor";
import voiceApiPage from "../pages/VoiceApiPage.spec";
import headerPage from "../pages/HeaderPage.spec";

Given("I want to navigate to telnyx.com and close cookies pop-up window", () => {       
    headerPage.enterURL();
    headerPage.closeCookies();   
});

Given('I want to go to the "Voice API" page', () => {     
    headerPage.clickMainMenuItemProducts();
    cy.wait(4000);  
    headerPage.getSubMainMenuItem(2, 5).click(); // Products -> Voice API
      
});   

When('I am on the "Voice API" page', () => {
    cy.wait(4000); 
    cy.url().should('include', 'https://telnyx.com/products/voice-api')        
});
  
Then("Validate FEATURES title block data", (datatable) => {
    datatable.hashes().forEach((element) => {
        voiceApiPage.isTitleBlock(element.title_of_article);
        voiceApiPage.isDescriptionBlock(element.describe_of_article);              
    });
});
  
Then("Validate FEATURES subblock data. Number: {string}, title of the article: {string}, description of the article: {string}", (number, title_of_article, describe_of_article) => { 
    voiceApiPage.isTitleSubBlock(number, title_of_article);
    voiceApiPage.isDescriptionSubBlock(number, describe_of_article);       
});
