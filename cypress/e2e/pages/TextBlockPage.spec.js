import BasicPage from "../pages/BasicPage.spec";

class TextBlockPage extends BasicPage {
    constructor(){
        super()
        this.tagName = '';
    }  

    getTitleSubBlock(i){
        return cy.get('section:nth-child(4) ' + this.tagName + ' li:nth-child('+ i +') h3');
    }

    getDescriptionSubBlock(i){
        return cy.get('section:nth-child(4) ' + this.tagName + ' li:nth-child('+ i +') p');
    }     

    haveTitleSubBlock(i, titleArticle){
        this.getTitleSubBlock(i)
            .should('have.text', titleArticle)
    }

    haveDescriptionSubBlock(i, describeArticle){
        this.getDescriptionSubBlock(i)
            .should('have.text', describeArticle)
    }
}

export default TextBlockPage;