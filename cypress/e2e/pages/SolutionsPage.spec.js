class SolutionsPage{

    getFirstArticleLink(){
        return cy.get('section[id="industries"]>div:nth-child(2) a');
    }

    getArticleLink(i){
        return cy.get('section[id="industries"]>div:nth-child(3) div:nth-child('+ i +') a');
    }

    shouldFirstArticleLink(linkArticle){
        this.getFirstArticleLink().should('have.attr', 'href', linkArticle);
    }

    shouldArticleLink(i, linkArticle){
        this.getArticleLink(i).should('have.attr', 'href', linkArticle);
    }

}

const solutions_page = new SolutionsPage();
export default solutions_page;


