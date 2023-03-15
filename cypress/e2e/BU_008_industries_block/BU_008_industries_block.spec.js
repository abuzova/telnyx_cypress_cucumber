/// <reference types="cypress" />
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import solutionsPage from "../pages/SolutionsPage.spec";
import mainMenuPage from "../pages/MainMenuPage.spec";

Given("I navigate to the Website", () => {
      mainMenuPage.enterURL();
      mainMenuPage.closeCookies();
      //cy.log('Hello word!!!')         
});

Given("I navigate to the Solutions page", () => { 
    mainMenuPage.clickMainMenuItemSolutions();
    cy.wait(2000); 
    //cy.log('Hello word!!!')
}); 

When("I am on the Solutions page", () => {
    //cy.log('Hello word!!!');
    cy.url().should('eq', 'https://telnyx.com/solutions');
});

Then("Verify link at the industries first article block", (datatable) => {    
    datatable.hashes().forEach(element => {
        cy.log('element ' + element.first_articles_link);
        solutionsPage.shouldFirstArticleLink(element.first_articles_link) 
    });
});

Then(/^Verify links at the industries block ((\W\w+\W([a-z-])+)) (\w+)$/, (linkArticle, i_number) => {    
   //cy.log('inkArticle ' + inkArticle);
   //cy.log('i_number ' + i_number);
   solutionsPage.shouldArticleLink(i_number, linkArticle);
}); 