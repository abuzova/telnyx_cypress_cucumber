/// <reference types="cypress" />
import { Given, Then } from "@badeball/cypress-cucumber-preprocessor";
import missionControlPage from "../pages/MissionControlPage.spec";
import mainMenuPage from "../pages/MainMenuPage.spec";
beforeEach(() => {
    //cy.viewport(1600, 720);

  
});
Given("I want to test the Download SIP Trunking pricing functionality", () => {   

    mainMenuPage.enterURL();
    mainMenuPage.closeCookies();
      
    mainMenuPage.clickMainMenuItemWhyTelnyx();
    cy.wait(3000);  
    mainMenuPage.getSubMainMenuItem(11, 3).click(); // Products -> SIP Trunking
      //cy.wait(4000);
      //cy.url().should('include', 'https://telnyx.com/products/sip-trunks')    
});

Then("Verify Download SIP Trunking pricing form with valid credentials", (datatable) => {

    datatable.hashes().forEach((element) => {
        //cy.log(element.button_i); 
        //cy.log(element.image_i); 
        missionControlPage.clickHowItWorksButton(element.button_i);
        missionControlPage.appearedHowItWorksDescription(element.description_i)
        missionControlPage.appearedImgBlock(element.image_i, element.img_link);
        
        //faqPage.clickQuestionTitle(element.i_element);
        //cy.wait(3000);
        //faqPage.isVisibleDescriptionBlock(element.i_element);
        //faqPage.isHiddenDescriptionBlock(element.i_element );  // check is "The description of the previous block is hidden." Should be loop
    });

});