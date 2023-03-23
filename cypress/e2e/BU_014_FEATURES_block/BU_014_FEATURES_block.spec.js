/// <reference types="cypress" />
import { Given, When, Then  } from "@badeball/cypress-cucumber-preprocessor";
import voiceApiPage from "../pages/VoiceApiPage.spec";
import mainMenuPage from "../pages/MainMenuPage.spec";

Given("I navigate to the Website", () => { 
      
    mainMenuPage.enterURL();
    mainMenuPage.closeCookies();
        
    mainMenuPage.clickMainMenuItemProducts();
    cy.wait(4000);  
    mainMenuPage.getSubMainMenuItem(2, 5).click(); // Products -> Voice API // header div:nth-child(3)>nav>div:nth-child(2) div:nth-child(5)>a
    cy.wait(4000); 
    cy.url().should('include', 'https://telnyx.com/products/voice-api')    
});
//Then("Validate Frequently Asked Questions block work", (datatable) => {

    //datatable.hashes().forEach((element) => {
        //faqPage.clickQuestionTitle(element.i_element);
        //cy.wait(3000);
        //faqPage.isVisibleDescriptionBlock(element.i_element);        
   // });

//});

/*
    Given("I want to navigate to telnyx.com and close cookies pop-up window", () => {
      headerPage.enterURL();
      headerPage.closeCookies();                
    });

    Given('I want to go to the "Solutions" page', () => {
        headerPage.getMainMenuItemSolutions().click(); 
    })

    Given('I want go to the "Account notifications" page', () => {
         // inspect the caught error
         cy.on('uncaught:exception', (e, runnable) => {
            console.log('error is', e);
            console.log('runnable', runnable);
            if(e.message.includes('Minified React error #423') || e.message.includes('Minified React error #418')) {
            // we expected this error, so let's ignore it
            // and let the test continue           
                return false;                   
            }
            // on any other error message the test fails
        }) 
        solutionsPage.clickAccountNotificationsLink(); 
    })    

    When('I am on the "Account notifications" page', () => {
        cy.url().should('eq', 'https://telnyx.com/use-cases/customer-notifications-system');      
    });
    */

    /*Then(/^Validate FEATURES block data (\w+) ((((((\w+)[-])+)(\w+))|((((\w+)[\s])+)(\w+))))$/, (number, title_of_article) => {
        cy.log('number', number); 
        cy.log('title_of_article', title_of_article); 
     
    }); */

    Then("Validate FEATURES title block data", (datatable) => {  
        datatable.hashes().forEach((element) => {
            cy.log('element.number ' + element.number);
            cy.log('element.title_of_article ' + element.title_of_article);
            cy.log('element.describe_of_article ' + element.describe_of_article);
            voiceApiPage.isTitleBlock(element.title_of_article);
            voiceApiPage.isDescriptionBlock(element.describe_of_article);              
        });
    });
  
    Then("Validate FEATURES subblock data", (datatable) => {        
        datatable.hashes().forEach((element) => {
            cy.log('element.number ' + element.number);
            cy.log('element.title_of_article ' + element.title_of_article);
            cy.log('element.describe_of_article ' + element.describe_of_article);
            voiceApiPage.isTitleSubBlock(element.number, element.title_of_article)
            voiceApiPage.isDescriptionSubBlock(element.number, element.describe_of_article)
        });
    });
