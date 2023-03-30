// https://telnyx.com/sign-up

import FormPage from "../pages/FormPage.spec";

class RegistrationPage extends FormPage {

    constructor(){
        super();
        this.idName = "full_name";
    };
    
    getEmailInput(){
        return cy.get('form input[id="email"]');
    } 
   
    getNameInput(){
        return cy.get('div:nth-child(2) form input[id='+ this.idName +']');
    }  

    getPasswordInput(){
        return cy.get('form input[id="password"]');
    }

    getTermsAndConditionsCheckbox(){
        return cy.get('form input[id="terms_and_conditions"]');
    }

    getSubscriptionCheckbox(){
        return cy.get('form input[id="subscription_opt_in"]');
    }
   
    getSubmitButton(){ 
        return cy.get('form button[type="submit"]:nth-child(7)');
    } 

    setPasswordInput(passwordValue){
        this.getPasswordInput().type(passwordValue);
        this.getPasswordInput().should('have.value', passwordValue);
    }

    checkTermsAndConditionsCheckbox(){      
        this.getTermsAndConditionsCheckbox()
            .check()        
            .should('be.checked');
    }
}

const registrationPage = new RegistrationPage();
export default registrationPage;