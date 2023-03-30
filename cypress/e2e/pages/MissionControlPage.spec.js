// https://telnyx.com/mission-control

import AccordionPage from "../pages/AccordionPage.spec";

class MissionControlPage extends AccordionPage {

    constructor(){
        super();
    }
    
    // How It Works block

    getTitleAccordionBlock(i){       
        return cy.get('section:nth-child(4)>div>div>div>div>button:nth-child('+ i +')');
    }   

    getDescriptionAccordionBlock(i){ 
        return cy.get('section:nth-child(4) div>button:nth-child('+ i +') p');
    }

    getImageActiveBlock(){
        return cy.get('section:nth-child(4) div[data-state="active"]');
    }

    getImgBlock(i){
        return cy.get('section:nth-child(4)>div>div>div>div:nth-child('+ i +') picture img'); // 2, 3, 4, 5
    }
    

    // How It Works block

    clickTitleAccordionBlock(i){
        cy.get('section:nth-child(4)').scrollIntoView();        
        cy.wait(3000);
        this.getTitleAccordionBlock(i).click();       
    }   

    isVisibleDescriptionAccordionBlock(i){
        this.getDescriptionAccordionBlock(i)
            .should('have.css', 'display', 'block');
    } 

    appearedImgBlock(i, imgLink){
        this.getImgBlock(i)
            .should('have.attr', 'src', imgLink);
    }
   
}
const missionControlPage = new MissionControlPage();
export default missionControlPage;