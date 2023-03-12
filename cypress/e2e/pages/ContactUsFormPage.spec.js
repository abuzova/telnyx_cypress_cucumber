class ContactUsFormPage {    
  
    getReasonForContactSelect(){
        return cy.get('section select[id="Reason_for_Contact__c"]');
    }

    getFirstNameInput(){
        return cy.get('form input[id="FirstName"]');
    }

    getLastNameInput(){
        return cy.get('form input[id="LastName"]');
    }

    getEmailInput(){
        return cy.get('form input[id="Email"]');
    }

    getPhoneNumberExtensionSelect(){
        return cy.get('form select[id="Phone_Number_Extension__c"]');
    }

    getPhoneNumberBaseInput(){
        return cy.get('form input[id="Phone_Number_Base__c"]');
    }

    getWebsiteInput(){
        return cy.get('form input[id="Website"]');
    }

    getUseCaseFormSelect(){
        return cy.get('select[id="Use_Case_Form__c"]');
    }

    getFormAdditionalInformationInput(){
        return cy.get('form textarea[id="Form_Additional_Information__c"]');
    }

    getSubscriptionOptCheckbox(){
        return cy.get('input[name="Subscription_Opt_In__c"]');
    }

    getSubmitButton(){
        return cy.get('form button');
    }

    chooseReasonForContactSelect(reasonValue){
        this.getReasonForContactSelect()
            .select(reasonValue)
            .should('have.value', reasonValue)
    }

    setFirstNameInput(firstNameValue){
        this.getFirstNameInput()
            .type(firstNameValue)
            .should('have.value', firstNameValue)
    }

    setLastNameInput(lastNameValue){
        this.getLastNameInput()
            .type(lastNameValue)
            .should('have.value', lastNameValue);
    }

    setEmailInput(emailValue){
        this.getEmailInput()
            .type(emailValue)
            .should('have.value', emailValue);
    }

    choosePhoneNumberExtensionSelect(phoneNumberExtensionValue){
        this.getPhoneNumberExtensionSelect()
            .select(phoneNumberExtensionValue)
            .should('have.value', phoneNumberExtensionValue);
    }

    setPhoneNumberBaseInput(phoneNumberBaseValue){
        this.getPhoneNumberBaseInput()
            .type(phoneNumberBaseValue)
            .should('have.value', phoneNumberBaseValue);
    }

    setWebsiteInput(websiteValue){
        this.getWebsiteInput()
            .type(websiteValue)
            .should('have.value', websiteValue)
    }

    chooseUseCaseFormSelect(useCaseFormValue){
        this.getUseCaseFormSelect()
            .select(useCaseFormValue)
            .should('have.value', useCaseFormValue);        
    }

    setFormAdditionalInformationInput(additionalInformationValue){
        this.getFormAdditionalInformationInput()
            .type(additionalInformationValue)
            .should('have.value', additionalInformationValue);
    } 

    checkSubscriptionOptCheckbox(){
        this.getSubscriptionOptCheckbox()
            .check()
            .should('be.checked');
    }

    clickSubmitButton(){
        this.getSubmitButton().click();
    }
}

const contactUsFormPage = new ContactUsFormPage();
export default contactUsFormPage;