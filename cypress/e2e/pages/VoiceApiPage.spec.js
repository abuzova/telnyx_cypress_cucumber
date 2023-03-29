// https://telnyx.com/products/voice-api

import BasicPage from "../pages/BasicPage.spec";

class VoiceApiPage extends BasicPage {

    constructor(){
        super();
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

    getTitleSubBlock(i){
        return cy.get('section:nth-child(4) ul li:nth-child('+ i +') h3');
    }

    getDescriptionSubBlock(i){
        return cy.get('section:nth-child(4) ul li:nth-child('+ i +') p');
    }

    clickDownloadEbookLink(){
        this.getDownloadEbookLink().click();        
    }

    isTitleBlock(titleArticle){
        this.getTitleBlock()
            .should('have.text', titleArticle)
    }

    isDescriptionBlock(describeArticle){
        this.getDescriptionBlock()
            .should('have.text', describeArticle)
    }

    isTitleSubBlock(i, titleArticle){
        this.getTitleSubBlock(i)
            .should('have.text', titleArticle)
    }

    isDescriptionSubBlock(i, describeArticle){
        this.getDescriptionSubBlock(i)
            .should('have.text', describeArticle)
    }
    
}

const  voiceApiPage = new VoiceApiPage();
export default voiceApiPage;