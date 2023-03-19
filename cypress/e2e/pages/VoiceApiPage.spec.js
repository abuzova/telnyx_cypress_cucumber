class VoiceApiPage{

    getDownloadEbookLink(){
        return cy.get('section:nth-child(7) ul li:nth-child(2) a');
    }

    clickDownloadEbookLink(){
        this.getDownloadEbookLink().click();        
    }

}
const voiceApiPage = new VoiceApiPage();
export default voiceApiPage;