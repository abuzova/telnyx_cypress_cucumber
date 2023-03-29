// https://telnyx.com/products/sip-trunks

import BasicPage from "../pages/BasicPage.spec";

class ResourcesPage extends BasicPage { 
    
    constructor(){
        super();
    }

    getStartBuildingTabs(i){       
        return cy.get('section:nth-child(7) div:nth-child(4) button:nth-child('+ i +')');
    }
  
    getTabDescription(i){
        return cy.get('section:nth-child(7) div:nth-child(4) div:nth-child(' + i + ')'); // 2-7 // 
    }

    getCodeBlock(i){
        return cy.get('section:nth-child(7) div:nth-child(4) div:nth-child(' + i + ') pre code');
    }

    clickStartBuildingTabs(i){
        this.getStartBuildingTabs(i).click();
    }

    appearedTabDescription(i){
        this.getTabDescription(i).should('have.attr', 'data-state', 'active')
    }

    appearedCodeBlock(i, descriptionValue){
        this.getCodeBlock(i).should('have.text', descriptionValue);
    }   
   
}
const resourcesPage = new ResourcesPage();
export default resourcesPage;