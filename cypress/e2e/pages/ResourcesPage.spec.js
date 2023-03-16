class ResourcesPage {  

    getStartBuildingTabs(i){       
        return cy.get('section:nth-child(7) div:nth-child(4) button:nth-child('+ i +')');
    }

    //getTab(){
    //    return cy.get('tabindex="0"');
    //}
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

    appearedCodeBlock(i){
        this.getCodeBlock(i).contains(i);
    }   
   
}
const resourcesPage = new ResourcesPage();
export default resourcesPage;