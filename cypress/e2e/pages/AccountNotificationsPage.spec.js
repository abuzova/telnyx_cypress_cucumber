// https://telnyx.com/use-cases/customer-notifications-system

import TextBlockPage from "../pages/TextBlockPage.spec";

class AccountNotificationsPage extends TextBlockPage {
    
    constructor(){
        super();
        this.tagName = 'ol';
    }
    
    getNumberBlock(i){
        return cy.get('section '+ this.tagName +'>li:nth-child('+ i +') strong ');
    }
  
    haveNumberBlock(i, numberValue){
        this.getNumberBlock(i)
            .should('have.text', numberValue);
    }
}

const accountNotificationsPage = new AccountNotificationsPage();
export default accountNotificationsPage;