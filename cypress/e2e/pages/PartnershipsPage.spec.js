class PartnershipsPage {

    // Become a Telnyx Partner
    
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

    getPhoneNumberExtensionSelect(){
        return cy.get('div:nth-child(2) form select[id="Phone_Number_Extension__c"]');
    }

    getPhoneNumberBaseInput(){
        return cy.get('div:nth-child(2) form input[id="Phone_Number_Base__c"]');
    }

    getPartnerTypeSelect(){
        return cy.get('div:nth-child(2) form select[id="Partner_Type__c"]');
    }

    getAdditionalInformationInput(){
        return cy.get('div:nth-child(2) form textarea[id="Form_Additional_Information__c"]');
    }

    getSubscriptionCheckboxText(){
        return cy.get('div:nth-child(2) form div[class="mktoFormRow"]>div>div>div>label[for="mktoCheckbox_12691_0"]');
    }

    getSubscriptionCheckbox(){
        return cy.get('div:nth-child(2) form div[class="mktoFormRow"]>div>div>div>input[name="Subscription_Opt_In__c"]');
    }

    getApplyNowButton(){
        return cy.get('div:nth-child(2) form button');
    }

    // Become a Telnyx Partner

    setFirstNameInput(firstNameValue){
        this.getFirstNameInput()
            .clear()
            .type(firstNameValue);        
        this.getFirstNameInput().should('have.value', firstNameValue)
    }

    setLastNameInput(lastNameValue){
        this.getLastNameInput()
            .clear()
            .type(lastNameValue);
        this.getLastNameInput().should('have.value', lastNameValue);
    }

    setCompanyInput(companyValue){
        this.getCompanyInput()
            .clear()
            .type(companyValue);
        this.getCompanyInput().should('have.value', companyValue);
    }

    setEmailInput(emailValue){
        this.getEmailInput()
            .clear()   
            .type(emailValue);
        this.getEmailInput().should('have.value', emailValue);
    }

    setPhoneNumberExtensionSelect(phoneNumberExtensionValue){ 
        this.getPhoneNumberExtensionSelect().select(phoneNumberExtensionValue);
        this.getPhoneNumberExtensionSelect().should('have.value', phoneNumberExtensionValue);
    }


    setPhoneNumberBaseInput(phoneNumberBaseValue){
        this.getPhoneNumberBaseInput()
            .clear()    
            .type(phoneNumberBaseValue);
        this.getPhoneNumberBaseInput().should('have.value', phoneNumberBaseValue);
    }
   
    setPartnerTypeSelect(partnerTypeValue){ 
        this.getPartnerTypeSelect()   
            .select(partnerTypeValue);
        this.getPartnerTypeSelect().should('have.value', partnerTypeValue);
    }
    
    setAdditionalInformationInput(additionalInformatioValue){
        this.getAdditionalInformationInput()
            .clear()
            .type(additionalInformatioValue);
        this.getAdditionalInformationInput().should('have.value', additionalInformatioValue);
    }

    checkSubscriptionCheckbox(){      
        this.getSubscriptionCheckboxText()
            .click();            
        this.getSubscriptionCheckbox()            
            .should('be.checked');
    }

    clickApplyNowButton(){
        this.getApplyNowButton().click();
    }
}
    const partnershipsPage = new PartnershipsPage();
    export default partnershipsPage;