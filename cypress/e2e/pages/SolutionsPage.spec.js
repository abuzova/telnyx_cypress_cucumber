class SolutionsPage{

    getFirstArticleLink(){
        return cy.get('section[id="industries"]>div:nth-child(2) a');
    }

    getArticleLink(i){
        return cy.get('section[id="industries"]>div:nth-child(3) div:nth-child('+ i +') a');
    }

    
    getAccountNotificationsLink(){
        return cy.xpath("//ul/li//h3[contains(text(), 'Account notifications')]/./following-sibling::div/a");
    }

    shouldFirstArticleLink(linkArticle){
        this.getFirstArticleLink().should('have.attr', 'href', linkArticle);
    }

    shouldArticleLink(i, linkArticle){
        this.getArticleLink(i).should('have.attr', 'href', linkArticle);
    }

    clickAccountNotificationsLink(){
        this.getAccountNotificationsLink()
            .click();
    }

}

const solutions_page = new SolutionsPage();
export default solutions_page;
