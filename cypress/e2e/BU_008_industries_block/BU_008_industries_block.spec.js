/// <reference types="cypress" />
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import solutionsPage from "../pages/SolutionsPage.spec";
import mainMenuPage from "../pages/MainMenuPage.spec";

Given("I navigate to the Website", () => {
      mainMenuPage.enterURL();
      mainMenuPage.closeCookies();
      cy.log('Hello word!!!')         
});

Given("I navigate to the Solutions page", () => { 
    mainMenuPage.clickMainMenuItemSolutions();
    cy.wait(2000); 
    cy.log('Hello word!!!')
}); 

When("I am on the Solutions page", () => {
    cy.log('Hello word!!!');
    cy.url().should('eq', 'https://telnyx.com/solutions');
});

Then("Verify links at the industries block", (datatable) => {
    cy.log('Hello word!!!' + datatable.element.link);
    //datatable.hashes().forEach((element) => {
        //cy.log(element.link) 
        //faqPage.clickQuestionTitle(element.i_element);
        //cy.wait(3000);
        //faqPage.isVisibleDescriptionBlock(element.i_element);
        //faqPage.isHiddenDescriptionBlock(element.i_element );  // check is "The description of the previous block is hidden." Should be loop
        
    
    //});

}); 