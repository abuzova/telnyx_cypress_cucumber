class EbookVoiceApiPage {
    
    getFirstNameInput(){
        return cy.get('div:nth-child(2) form input[id="FirstName"]');
    }

    getLastNameInput(){
        return cy.get('div:nth-child(2) form input[id="LastName"]');
    }

    getCompanyInput(){
        return cy.get('div:nth-child(2) form input[id="Company"]');
    }    

    getEmailInput(){
        return cy.get('div:nth-child(2) form input[id="Email"]');
    }

    getSubscriptionCheckbox(){
        return cy.get('div:nth-child(2) form input[name="Subscription_Opt_In__c"][type="checkbox"]');
    }

    getSubmitButton(){
        return cy.get('div:nth-child(2) form button');
    }

    setFirstNameInput(firstNameValue){
        this.getFirstNameInput().type(firstNameValue);        
        this.getFirstNameInput().should('have.value', firstNameValue)
    }

    setLastNameInput(lastNameValue){
        this.getLastNameInput().type(lastNameValue);
        this.getLastNameInput().should('have.value', lastNameValue);
    }

    setEmailInput(emailValue){
        this.getEmailInput().type(emailValue);
        this.getEmailInput().should('have.value', emailValue);
    }

    setCompanyInput(companyValue){
        this.getCompanyInput().type(companyValue);
        this.getCompanyInput().should('have.value', companyValue);
    }

    checkSubscriptionCheckbox(){      
        this.getSubscriptionCheckbox()
            .check({force: true})
            .should('be.checked');
    }

    clickSubmitButton(){
        this.getSubmitButton().click();
    }
}
    const ebookVoiceApiPage = new EbookVoiceApiPage();
    export default ebookVoiceApiPage;