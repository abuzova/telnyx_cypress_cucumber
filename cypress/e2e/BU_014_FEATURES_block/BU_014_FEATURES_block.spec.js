/// <reference types="cypress" />
import { Given, When, Then  } from "@badeball/cypress-cucumber-preprocessor";
import voiceApiPage from "../pages/VoiceApiPage.spec";
import mainMenuPage from "../pages/MainMenuPage.spec";

/*Given("I navigate to the Website", () => { 
      
    mainMenuPage.enterURL();
    mainMenuPage.closeCookies();
        
    mainMenuPage.clickMainMenuItemProducts();
    cy.wait(4000);  
    mainMenuPage.getSubMainMenuItem(2, 5).click(); // Products -> Voice API // header div:nth-child(3)>nav>div:nth-child(2) div:nth-child(5)>a
    cy.wait(4000); 
    cy.url().should('include', 'https://telnyx.com/products/voice-api')    
});*/

Given("I want to navigate to telnyx.com and close cookies pop-up window", () => {       
    mainMenuPage.enterURL();
    mainMenuPage.closeCookies();   
});

Given('I want to go to the "Voice API" page', () => {     
    mainMenuPage.clickMainMenuItemProducts();
    cy.wait(4000);  
    mainMenuPage.getSubMainMenuItem(2, 5).click(); // Products -> Voice API // header div:nth-child(3)>nav>div:nth-child(2) div:nth-child(5)>a
      
});   

When('I am on the "Voice API" page', () => {
    cy.wait(4000); 
    cy.url().should('include', 'https://telnyx.com/products/voice-api')        
});
    

    /*Then(/^Validate FEATURES block data (\w+) ((((((\w+)[-])+)(\w+))|((((\w+)[\s])+)(\w+))))$/, (number, title_of_article) => {
        cy.log('number', number); 
        cy.log('title_of_article', title_of_article); 
     
    }); */

Then("Validate FEATURES title block data", (datatable) => {
    //voiceApiPage.isTitleBlock(title_of_article);
    //voiceApiPage.isDescriptionBlock(describe_of_article);

    datatable.hashes().forEach((element) => {
        cy.log('element.number ' + element.number);
        cy.log('element.title_of_article ' + element.title_of_article);
        cy.log('element.describe_of_article ' + element.describe_of_article);
        voiceApiPage.isTitleBlock(element.title_of_article);
        voiceApiPage.isDescriptionBlock(element.describe_of_article);              
    });
});
  
Then("Validate FEATURES subblock data. Number: {string}, title of the article: {string}, description of the article: {string}", (number, title_of_article, describe_of_article) => { 
    voiceApiPage.isTitleSubBlock(number, title_of_article);
    voiceApiPage.isDescriptionSubBlock(number, describe_of_article);       
    /*datatable.hashes().forEach((element) => {
        cy.log('element.number ' + element.number);
        cy.log('element.title_of_article ' + element.title_of_article);
        cy.log('element.describe_of_article ' + element.describe_of_article);
        voiceApiPage.isTitleSubBlock(element.number, element.title_of_article)
        voiceApiPage.isDescriptionSubBlock(element.number, element.describe_of_article)
    });*/
});
