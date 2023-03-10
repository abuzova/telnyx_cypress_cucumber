class FooterPage {
    enterURL() {
        cy.visit("https://telnyx.com/");
    }
  
    getLeftFooterMenuItem(i){
        return cy.get('footer>div:nth-child(1)>div:nth-child(2)>ul>li:nth-child('+ i +')>a');
    } 

    getRightFooterMenuItem(i){
        return cy.get('footer>div:nth-child(1)>div:nth-child(3)>ul>li:nth-child('+ i +')>a');
    } 

    validateLeftFooterMenuItem(menu_link, i) {        
        this.getLeftFooterMenuItem(i).should('have.attr', 'href', menu_link);
    } 

    validateRightFooterMenuItem(menu_link, i) {        
        this.getRightFooterMenuItem(i).should('have.attr', 'href', menu_link);
    } 
}
const footerpage = new FooterPage();
export default footerpage;