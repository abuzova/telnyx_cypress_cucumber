// https://telnyx.com/products/sip-trunks

import BasicPage from "../pages/BasicPage.spec";

class FAQPage extends BasicPage { 
    
    constructor(){
        super();
    }  

    getQuestionTitle(i){
        return cy.get('main section:nth-child(12) div div:nth-child('+ i +')>button');
    }

    getQuestionDescription(i){
        return cy.get('main section:nth-child(12)>div>div>div:nth-child(1)>div:nth-child(' + i + ')>div'); 
    }

    getProductsMenuItem(){
        return cy.get('header div:nth-child(3)>nav button:nth-child(1)');
    }

    getSIPTrunkingSubMenuItem(){
        return cy.get('header nav div:nth-child(2) div:nth-child(3)>a');
    }

    clickProductsMenuItem(){
        this.getProductsMenuItem().click();
    }

    clickSIPTrunkingSubMenuItem(){
        this.getSIPTrunkingSubMenuItem().click();
        
    }

    clickQuestionTitle(i){    
        this.getQuestionTitle(i).click();
    }

    isVisibleDescriptionBlock(i){
        this.getQuestionDescription(i)
            .should('have.attr','data-state', 'open')
            .should('have.css','visibility', 'visible');
    }  
}  

const faqpage = new FAQPage();
export default faqpage;