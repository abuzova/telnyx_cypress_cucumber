class BasicPage {
    constructor(){
    }   

    enterURL() {
      cy.visit("https://telnyx.com/");
    }

    getCloseButton(){
        return cy.get('div[role="alertdialog"] button svg g');
    }
    closeCookies(){
        this.getCloseButton().click();
    } 
}

export default BasicPage;