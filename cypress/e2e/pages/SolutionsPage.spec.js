class Solutions{

    getFirstArticleLink(){
        return cy.get('section[id="industries"]>div:nth-child(2) a');
    }

    getArticleLink(i){
        return cy.get('section[id="industries"]>div:nth-child(3) div:nth-child('+ i +') a');
    }

    clickFirstArticleLink(){
        this.getFirstArticleLink().click();
    }

    clickArticleLink(i){
        this.getItArticleLink(i).click();
    }

}



