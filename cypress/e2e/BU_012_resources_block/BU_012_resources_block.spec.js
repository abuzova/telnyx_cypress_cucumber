/// <reference types="cypress" />
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import resourcesPage from "../pages/ResourcesPage.spec";
import mainMenuPage from "../pages/MainMenuPage.spec";

Given("I navigate to the Website", () => {
      mainMenuPage.enterURL();
      mainMenuPage.closeCookies();
      //cy.log('Hello word!!!')         
});

Given("I navigate to the Solutions page", () => { 
    mainMenuPage.clickMainMenuItemProducts();
    mainMenuPage.getSubMainMenuItem(2, 3).click({force: true});
    cy.wait(2000);   
}); 

When("I am on the SIP Trunks page", () => {    
    cy.url().should('eq', 'https://telnyx.com/products/sip-trunks');
});

Then(/^Verify resources block work (\w+) (.\w+) (\w+)$/, (number_i, language, description_i, description) => {
    resourcesPage.clickStartBuildingTabs(number_i);
    //resourcesPage.appearedTabDescription(description_i);
    cy.wait(3000);
    cy.log(language); 
    cy.log(description_i);
    cy.log(description);
});

When("I am on the SIP Trunks pageooo", () => {    
    cy.url().should('eq', 'https://telnyx.com/products/sip-trunks');
});

Then("Verify resources block work cURLyyyyyyy", (description) => {    
 
    //resourcesPage.clickStartBuildingTabs(number_i);
    //resourcesPage.appearedTabDescription(description_i);
    cy.wait(3000);
    //cy.log(language); 
    //cy.log(description_i);
    cy.log(description);   
    // Need make a checking data from a tab !!!!!!!!!!!!   
});

Then("Verify resources block work cURLiipp", (description) => {    
 
    //resourcesPage.clickStartBuildingTabs(number_i);
    //resourcesPage.appearedTabDescription(description_i);
    //cy.wait(3000);
    //cy.log(language); 
    //cy.log(description_i);
    cy.log(description);   
    // Need make a checking data from a tab !!!!!!!!!!!!
    /*datatable.hashes().forEach(element => {
        cy.log('element ' + element.cURLii);
        cy.log('element ' + element.cURL3);
        //solutionsPage.shouldFirstArticleLink(element.first_articles_link) 
    });*/
    

});


