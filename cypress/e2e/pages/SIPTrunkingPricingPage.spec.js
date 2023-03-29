// https://telnyx.com/pricing/elastic-sip

import BasicPage from "../pages/BasicPage.spec";

class SIPTrunkingPricingPage extends BasicPage {

    constructor(){
        super();
    }
    
    getFirstNameInput(){
        return cy.get('div:nth-child(2) form input[id="FirstName"]');
    }

    getLastNameInput(){
        return cy.get('div:nth-child(2) form input[id="LastName"]');
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

    checkSubscriptionCheckbox(){      
        this.getSubscriptionCheckbox()
            .check()
            .should('be.checked');
    }

    clickSubmitButton(){
        this.getSubmitButton().click();
    }
}
    const sip_trunking_pricing_page = new SIPTrunkingPricingPage();
    export default sip_trunking_pricing_page;