// https://portal.telnyx.com/?_gl=1*r1d3pp*_ga*MTgyMDI4MzY4LjE2NzUwNjc5MTU.*_ga_ZPM4K1DLND*MTY4MDA0NTc0OC4xMTkuMS4xNjgwMDQ3Mjc2LjUzLjAuMA..#/login/sign-in

import FormPage from "../pages/FormPage.spec";

class LogInPage extends FormPage {

    constructor(){
        super();         
    }

    // Log in page

    getEmailInput(){       
        return cy.get('form[aria-label="loginForm"] label input[autocomplete="username"]');
    }  
    
    getPasswordInput(){       
        return cy.get('form[aria-label="loginForm"] label input[autocomplete="current-password"]');
    }

    getSubscriptionCheckboxText(){
        return cy.get('form[aria-label="loginForm"] label[class="CheckboxField_checkboxLabel-tx-1qjNdz"]');
    }

    getSubscriptionCheckbox(){
        return cy.get('form[aria-label="loginForm"] label[class="CheckboxField_checkboxLabel-tx-1qjNdz"] input');
    } 
  
    getSubmitButton(){ 
        return cy.get('form[aria-label="loginForm"] button[type="submit"]');
    }

    // Log in page

    setPasswordInput(passwordValue){
        this.getPasswordInput().type(passwordValue);
        this.getPasswordInput().should('have.value', passwordValue);
    }

     clickSubscriptionCheckbox(){
       this.getSubscriptionCheckboxText().click();
       this.getSubscriptionCheckbox().should('be.checked');
    }  
}
const logInPage = new LogInPage();
export default logInPage;