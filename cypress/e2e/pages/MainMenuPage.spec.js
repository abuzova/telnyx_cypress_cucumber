class MainMenuPage {
    enterURL() {
        cy.visit("https://telnyx.com/");
    }

    getCloseButton(){
        return cy.get('div[role="alertdialog"] button svg g');
    }
    closeCookies(){
        this.getCloseButton().click();
    }

    getMainMenuItem(i){       
        return cy.get('header div:nth-child(3)>nav button:nth-child('+ i +')');
    }

    getSubMainMenuItem(i, j){ 
        return cy.get('header div:nth-child(3)>nav>div:nth-child('+ i +') div:nth-child('+ j +')>a');
    }

    getSubMainMenuItemResources(j){ 
        return cy.get('header div:nth-child(3)>nav>div:nth-child(15) a:nth-child('+ j +')');
    }

    getSubMainMenuItemDevelopers(j){
        return cy.get('header div:nth-child(3)>nav>div:nth-child(18)>a:nth-child('+ j +')');
    }

    getSubMainMenuItemSolutions(){
        return cy.get('header div:nth-child(3)>nav>a:nth-child(5)');
    }    

    getSeeAllSubMainMenuItem(i){        
        return cy.get('header div:nth-child(3) nav div:nth-child('+ i +')>div>div>div:nth-child(1)>div:nth-child(2)>a');         
    }

    clickMainMenuItemProducts(){
        let i = 1;
        this.getMainMenuItem(i).click({ multiple: true });
    }

    clickMainMenuItemPricing(){
        let i = 6;
        this.getMainMenuItem(i).click({ multiple: true });
    }

    clickMainMenuItemWhyTelnyx(){
        let i = 10;
        this.getMainMenuItem(i).click({ multiple: true });
    }

    clickMainMenuItemResources(){
        let i = 13;
        this.getMainMenuItem(i).click({ multiple: true });
    }

    clickMainMenuItemDevelopers(){
        let i = 16;
        this.getMainMenuItem(i).click({ multiple: true });
    }   

    validateMenusProducts(menu_link, i, j) {        
        this.getSubMainMenuItem(i, j).should('have.attr', 'href', menu_link);
    }

    validateMenusPricing(menu_link, i, j) {        
        this.getSubMainMenuItem(i, j).should('have.attr', 'href', menu_link);
    }

    validateMenusWhyTelnyx(menu_link, i, j) {        
        this.getSubMainMenuItem(i, j).should('have.attr', 'href', menu_link);
    }

    validateMenusResources(menu_link, j) {        
        this.getSubMainMenuItemResources(j).should('have.attr', 'href', menu_link);
    }

    validateMenusDevelopers(menu_link, j) {        
        this.getSubMainMenuItemDevelopers(j).should('have.attr', 'href', menu_link);
    }

    validateMenuSolutions(menu_link) {        
        this.getSubMainMenuItemSolutions().should('have.attr', 'href', menu_link);
    }  
    
    validateMenuSeeAll(menu_link, i) {        
        this.getSeeAllSubMainMenuItem(i).should('have.attr', 'href', menu_link);
    } 
   
}
const mainmenupage = new MainMenuPage();
export default mainmenupage;