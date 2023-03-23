class VoiceApiPage{

    getDownloadEbookLink(){
        return cy.get('section:nth-child(7) ul li:nth-child(2) a');
    }

    clickDownloadEbookLink(){
        this.getDownloadEbookLink().click();        
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