// https://telnyx.com/resources/ebook-voice-api

import FormPage from "../pages/FormPage.spec";

class EbookVoiceApiPage extends FormPage {

    constructor(){
        super();
    }

    getCompanyInput(){
        return cy.get('div:nth-child(2) form input[id="Company"]');
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
}
const ebookVoiceApiPage = new EbookVoiceApiPage();
export default ebookVoiceApiPage;