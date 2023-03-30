// https://telnyx.com/products/voice-api

import TextBlockPage from "../pages/TextBlockPage.spec";

class VoiceApiPage extends TextBlockPage {

    constructor(){
        super();
        this.tagName = 'ul';
    }

    getDownloadEbookLink(){
        return cy.get('section:nth-child(7) ul li:nth-child(2) a');
    }

    getTitleBlock(){
        return cy.get('section:nth-child(4) header h2');
    }

    getDescriptionBlock(){
        return cy.get('section:nth-child(4) header p');
    }

    clickDownloadEbookLink(){
        this.getDownloadEbookLink().click();        
    } 

    haveTitleBlock(titleArticle){
        this.getTitleBlock()
            .should('have.text', titleArticle)
    }

    haveDescriptionBlock(describeArticle){
        this.getDescriptionBlock()
            .should('have.text', describeArticle)
    }
}

const  voiceApiPage = new VoiceApiPage();
export default voiceApiPage;