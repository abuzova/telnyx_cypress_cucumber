class FAQPage {
    enterURL() {
        cy.visit("https://telnyx.com/");
    }

    getCloseButton(){
        return cy.get('div[role="alertdialog"] button svg g');
    }
    closeCookies(){
        this.getCloseButton().click();
    }

    getQuestionTitle(i){
        return cy.get('main section:nth-child(12) div div:nth-child('+ i +')>button');
    }

    getQuestionDescription(i){
        return cy.get('main section:nth-child(12)>div>div>div:nth-child(1)>div:nth-child(' + i + ')>div'); // main section:nth-child(12) div:nth-child(1)>div:nth-child(1)>div
    }
    //section//div/header/strong[contains(text(), "FAQ")]/../../following-sibling::div//button  - first block
    // 
    // [data-state="closed"]

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
        //this.getQuestionTitle(i).click({force:true});
        this.getQuestionTitle(i).click();
    }

    isVisibleDescriptionBlock(i){
        this.getQuestionDescription(i)
            .should('have.attr','data-state', 'open')
            .should('have.css','visibility', 'visible');
    }

    /*isHiddenDescriptionBlock(i){
        this.getQuestionDescription(i)
            .should('have.attr','data-state', 'closed')
            .should('have.css','visibility', 'hidden');
    }*/
}   


const faqpage = new FAQPage();
export default faqpage;