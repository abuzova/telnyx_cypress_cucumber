class RegistrationPage {
    
    getCompanyEmailInput(){
        return cy.get('form input[id="email"]');
    }
   
    getFullNameInput(){
        return cy.get('form input[id="full_name"]');
    }   

    getPasswordInput(){
        return cy.get('form input[id="password"]');
    }

    getTermsAndConditionsCheckbox(){
        return cy.get('form input[id="terms_and_conditions"]');
    }

    /*getTermsAndConditionsLable(){
        return cy.get('form label[for="terms_and_conditions"]');
    }*/
    getSubscriptionCheckbox(){
        return cy.get('form input[id="subscription_opt_in"]');
    }

    /*getSubscriptionLable(){
        return cy.get('form label[for="subscription_opt_in"]');
    }*/
    
    getSignUpButton(){
        return cy.get('form button[type="submit"]:nth-child(7)');
    }    

    setCompanyEmailInput(companyEmailValue){
        this.getCompanyEmailInput().type(companyEmailValue);
        this.getCompanyEmailInput().should('have.value', companyEmailValue);
    }

    setFullNameInput(fullNameValue){
        this.getFullNameInput().type(fullNameValue);        
        this.getFullNameInput().should('have.value', fullNameValue)
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

    checkSubscriptionCheckbox(){      
        this.getSubscriptionCheckbox()
            .check()
            .should('be.checked');
    }

    clickSignUpButton(){
        this.getSignUpButton().click();
    }
}

const registrationPage = new RegistrationPage();
export default registrationPage;