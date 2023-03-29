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
    
    /*constructor(name) {
      this.speed = 0;
      this.name = name;
    }
    run(speed) {
      this.speed = speed;
      alert(`${this.name} бежит со скоростью ${this.speed}.`);
    }
    stop() {
      this.speed = 0;
      alert(`${this.name} стоит неподвижно.`);
    }*/  

}

export default BasicPage;