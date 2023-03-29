// https://telnyx.com/use-cases/customer-notifications-system

import BasicPage from "../pages/BasicPage.spec";

class AccountNotificationsPage extends BasicPage {
    
    constructor(){
        super();
    }
  
    getHowItWorksNumber(i){
        return cy.get('section ol>li:nth-child('+ i +') strong ');
    }

    getHowItWorksTitle(i){
        return cy.get('section ol>li:nth-child('+ i +') h3');
    }

    getHowItWorksDescription(i){
        return cy.get('section ol>li:nth-child('+ i +') p');
    }

    haveHowItWorksNumber(i, numberValue){
        this.getHowItWorksNumber(i)
            .should('have.text', numberValue);
    }

    haveHowItWorksTitle(i, titleValue){
        this.getHowItWorksTitle(i)
            .should('have.text', titleValue);
    }

    haveHowItWorksDescription(i, descriptionValue){
        this.getHowItWorksDescription(i)
            .should('have.text', descriptionValue);
    }

}

const accountNotificationsPage = new AccountNotificationsPage();
export default accountNotificationsPage;