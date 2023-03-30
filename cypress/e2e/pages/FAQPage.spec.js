// https://telnyx.com/products/sip-trunks

import AccordionPage from "../pages/AccordionPage.spec";

class FAQPage extends AccordionPage { 
    
    constructor(){
        super();
    }  

    getTitleAccordionBlock(i){
        return cy.get('main section:nth-child(12) div div:nth-child('+ i +')>button');
    }

    getDescriptionAccordionBlock(i){
        return cy.get('main section:nth-child(12)>div>div>div:nth-child(1)>div:nth-child(' + i + ')>div'); 
    }

    clickTitleAccordionBlock(i){    
        this.getTitleAccordionBlock(i).click();
    }

    isVisibleDescriptionAccordionBlock(i){
        this.getDescriptionAccordionBlock(i)
            .should('have.attr','data-state', 'open')
            .should('have.css','visibility', 'visible');
    } 
}  

const faqpage = new FAQPage();
export default faqpage;