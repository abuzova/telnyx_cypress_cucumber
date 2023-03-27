class LogInPage {

    // Log in page

    getLoginInput(){       
        return cy.get('form[aria-label="loginForm"] label input[autocomplete="username"]');
    }
    
    getPasswordInput(){       
        return cy.get('form[aria-label="loginForm"] label input[autocomplete="current-password"]');
    }

    getRememberEmailLable(){
        return cy.get('form[aria-label="loginForm"] label[class="CheckboxField_checkboxLabel-tx-1qjNdz"]');
    }

    getRememberEmailCheckbox(){
        return cy.get('form[aria-label="loginForm"] label[class="CheckboxField_checkboxLabel-tx-1qjNdz"] input');
    }

    getLogInButton(){
        return cy.get('form[aria-label="loginForm"] button[type="submit"]');
    }

    // Log in page

    setLoginInput(loginValue){
        this.getLoginInput().type(loginValue);
        this.getLoginInput().should('have.value', loginValue);
    }

    setPasswordInput(passwordValue){
        this.getPasswordInput().type(passwordValue);
        this.getPasswordInput().should('have.value', passwordValue);
    }

    clickRememberEmailCheckbox(){
       this.getRememberEmailLable().click();
       this.getRememberEmailCheckbox().should('be.checked');
    }

    clickLogInButton(){
        this.getLogInButton().click();
    }   
}
const logInPage = new LogInPage();
export default logInPage;