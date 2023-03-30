// https://telnyx.com/partnerships

import FormPage from "../pages/FormPage.spec";

class PartnershipsPage extends FormPage {

    constructor(){
        super();
    }

    // Become a Telnyx Partner

    getCompanyInput(){
        return cy.get('div:nth-child(2) form input[id="Company"]');
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

    // Become a Telnyx Partner

    setCompanyInput(companyValue){
        this.getCompanyInput()
            .clear()
            .type(companyValue);
        this.getCompanyInput().should('have.value', companyValue);
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
}
const partnershipsPage = new PartnershipsPage();
export default partnershipsPage;