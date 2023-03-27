class MissionControlPage {
    
    // How It Works block

    getHowItWorksButton(i){       
        return cy.get('section:nth-child(4)>div>div>div>div>button:nth-child('+ i +')');
    }

    /*getHowItWorksTitle(i){ 
        return cy.get('section:nth-child(4) div>button:nth-child('+ i +') h3');
    }*/

    getHowItWorksDescription(i){ 
        return cy.get('section:nth-child(4) div>button:nth-child('+ i +') p');
    }

    getImageActiveBlock(){
        return cy.get('section:nth-child(4) div[data-state="active"]');
    }

    getImgBlock(i){
        return cy.get('section:nth-child(4)>div>div>div>div:nth-child('+ i +') picture img'); // 2, 3, 4, 5
    }
    

    // How It Works block

    clickHowItWorksButton(i){
        cy.get('section:nth-child(4)').scrollIntoView();        
        cy.wait(3000);
        this.getHowItWorksButton(i).click();       
    }   

    appearedHowItWorksDescription(i){
        this.getHowItWorksDescription(i)
            .should('have.css', 'display', 'block');
    } 

    appearedImgBlock(i, imgLink){
        this.getImgBlock(i)
            .should('have.attr', 'src', imgLink);
    }
   
}
const missionControlPage = new MissionControlPage();
export default missionControlPage;