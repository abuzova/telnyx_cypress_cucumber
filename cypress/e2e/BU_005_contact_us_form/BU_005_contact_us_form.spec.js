///
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import headerPage from "../pages/HeaderPage.spec";
import contactUsFormPage from "../pages/ContactUsFormPage.spec";

    Given("I want to navigate to telnyx.com and close cookies pop-up window", () => {
      headerPage.enterURL();
      headerPage.closeCookies();
    });

    Given('I want to go to the "Contact us" page', () => {
      headerPage.clickContactUsMenuItem();
    });

    When('I am on the "Contact us" page', () => {
      cy.url().should('eq', 'https://telnyx.com/contact-us');
    });

    Then("Verify contact us form with valid credentials", (datatable) => {       
        datatable.hashes().forEach((element) => {
          contactUsFormPage.chooseReasonForContactSelect(element.reason_for_contact);
          contactUsFormPage.setFirstNameInput(element.first_name);
          contactUsFormPage.setLastNameInput(element.last_name);
          contactUsFormPage.setEmailInput(element.email);
          contactUsFormPage.choosePhoneNumberExtensionSelect(element.phone_number_extension);
          contactUsFormPage.setPhoneNumberBaseInput(element.phone_number);
          contactUsFormPage.setWebsiteInput(element.company_website);
          contactUsFormPage.chooseUseCaseFormSelect(element.use_case_form);
          contactUsFormPage.setFormAdditionalInformationInput(element.additional_information);
          contactUsFormPage.checkSubscriptionOptCheckbox();
          //contactUsFormPage.clickSubmitButton();
         });
    });