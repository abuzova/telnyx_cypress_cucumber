///
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import headerPage from "../pages/HeaderPage.spec";
import solutionsPage from "../pages/SolutionsPage.spec";
import accountNotificationsPage from "../pages/AccountNotificationsPage.spec";

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

    //Then(/^Checking correct data in How it works (\w+) subblock$/, (datatable) => {
    Then("Checking correct data in How it works <number> subblock", (datatable) => { 
        //accountNotificationsPage.haveHowItWorksNumber(number.number, number.number);
        //accountNotificationsPage.haveHowItWorksTitle(number, title_of_article);
        //accountNotificationsPage.haveHowItWorksDescription(number, describe_of_article); 
        datatable.hashes().forEach((element) => {
            accountNotificationsPage.haveHowItWorksNumber(element.number, element.number);
           // accountNotificationsPage.haveHowItWorksTitle(element.number, element.title_of_article);
            //accountNotificationsPage.haveHowItWorksDescription(element.number, element.describe_of_article);        
        });
    }); 