///
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import headerPage from "../pages/HeaderPage.spec";
import contactUsFormPage from "../pages/ContactUsFormPage.spec";

    Given("I want to verify Talk to an expert form", () => {
      headerPage.enterURL();
      headerPage.closeCookies();

      headerPage.clickContactUsMenuItem();
    });
    When("Search the blog", (datatable) => {
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
    Then("Verify contact us form with valid credentials", (datatable) => {
        /*datatable.hashes().forEach((element) => {
            searchProduct.verifyProduct(element.searchValue);
        });*/
    });