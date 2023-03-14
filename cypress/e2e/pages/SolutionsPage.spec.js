class SolutionsPage {
    
    getAccountNotificationsLink(){
        return cy.xpath("//ul/li//h3[contains(text(), 'Account notifications')]/./following-sibling::div/a");
    }

    clickAccountNotificationsLink(){
        this.getAccountNotificationsLink()
            .click();
    }
  
   
}
const solutionspage = new SolutionsPage();
export default solutionspage;