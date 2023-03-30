// https://telnyx.com/contact-us

import FormPage from "../pages/FormPage.spec";

class ContactUsFormPage extends FormPage { 
    
    constructor(){
        super();
    }
  
    getReasonForContactSelect(){
        return cy.get('section select[id="Reason_for_Contact__c"]');
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

    getAdditionalInformationInput() {
        return cy.get('form textarea[id="Form_Additional_Information__c"]');
    }   

    getSubmitButton(){ 
        return cy.get('form button');
    }

    chooseReasonForContactSelect(reasonValue){
        this.getReasonForContactSelect()
            .select(reasonValue)
            .should('have.value', reasonValue)
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

    setAdditionalInformationInput(additionalInformationValue){
        this.getAdditionalInformationInput()
            .type(additionalInformationValue)
            .should('have.value', additionalInformationValue);
    }
}

const contactUsFormPage = new ContactUsFormPage();
export default contactUsFormPage;