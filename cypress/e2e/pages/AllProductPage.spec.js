class AllProductPage {    
  
    getInfrastructureLink(idValue, sub_infrastructure_i, sub_sub_infrastructure_i){
        return cy.get('div[id="'+ idValue +'"]>div:nth-child(2)>div:nth-child('+ sub_infrastructure_i +')>div>a:nth-child('+ sub_sub_infrastructure_i +')');
    }

    shouldInfrastructureLink(idValue, sub_infrastructure_i, sub_sub_infrastructure_i, sub_sub_infrastr_url){
        this.getInfrastructureLink(idValue, sub_infrastructure_i, sub_sub_infrastructure_i)
                .should('have.attr', 'href', sub_sub_infrastr_url)
    }  
  
}

const allProductPage = new AllProductPage();
export default allProductPage;