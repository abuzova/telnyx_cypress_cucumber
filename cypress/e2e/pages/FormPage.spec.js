import BasicPage from "../pages/BasicPage.spec";

class FormPage extends BasicPage{

    constructor(){
        super();
        this.idName = "FirstName";
        this.lastName = "LastName";
    };  
    
    getNameInput(){
      return cy.get('div:nth-child(2) form input[id='+ this.idName +']');
    };

    getLastNameInput(){
      return cy.get('div:nth-child(2) form input[id='+ this.lastName +']');
    }  

    getEmailInput(){
      return cy.get('div:nth-child(2) form input[id="Email"]');
    }    
    
    getSubscriptionCheckbox(){
      return cy.get('div:nth-child(2) form input[name="Subscription_Opt_In__c"][type="checkbox"]');
    }

    getSubmitButton(){
      return cy.get('div:nth-child(2) form button');
    }  

    setNameInput(nameValue){
      this.getNameInput()
          .clear()
          .type(nameValue);        
      this.getNameInput().should('have.value', nameValue)
    }

    setLastNameInput(lastNameValue){
      this.getLastNameInput()
          .clear()
          .type(lastNameValue);
      this.getLastNameInput().should('have.value', lastNameValue);
    }

    setEmailInput(emailValue){
      this.getEmailInput()
        .clear()
        .type(emailValue);
      this.getEmailInput().should('have.value', emailValue);
    } 

    checkSubscriptionCheckbox(){      
      this.getSubscriptionCheckbox()
          .check()
          .should('be.checked');
    }   
    
    clickSubmitButton(){
      this.getSubmitButton().click();
    }
    
}
 
export default FormPage;