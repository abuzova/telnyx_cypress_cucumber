/// <reference types="cypress" />
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import missionControlPage from "../pages/MissionControlPage.spec";
import mainMenuPage from "../pages/MainMenuPage.spec";

Given('I want to navigate to telnyx.com and close cookies pop-up window', () => { 
    mainMenuPage.enterURL();
    mainMenuPage.closeCookies();          
});

Given('I want to open the "Why Telnyx" dropdown menu', () => {
    mainMenuPage.clickMainMenuItemWhyTelnyx();    
});

Given('I want go to the "Mission Control" page', () => { 
    cy.wait(3000);  
    mainMenuPage.getSubMainMenuItem(11, 3).click(); // Why Telnyx -> Mission Control     
});

When('I am on the "Mission Control" page', () => { 
    cy.wait(4000);
    cy.url().should('include', 'https://telnyx.com/mission-control')    
});

Then('Verify "How it works" accordion works', (datatable) => {
    datatable.hashes().forEach((element) => {        
        missionControlPage.clickHowItWorksButton(element.button_i);
        missionControlPage.appearedHowItWorksDescription(element.description_i);
        missionControlPage.appearedImgBlock(element.image_i, element.img_link);        
    });

});