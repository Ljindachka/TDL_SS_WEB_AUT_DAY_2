import BasePage from "./basePage";

class TextBoxPage extends BasePage {
  static get url() {
    return "/text-box";
  }

  static get fullName() {
    return cy.get("input[placeholder='Full Name']");
  }
  static get emailBox() {
    return cy.get("input[placeholder='name@example.com']");
  }
  static get currentAddress() {
    return cy.get("#currentAddress");
  }
  static get permanentAddress() {
    return cy.get("#permanentAddress");
  }
  static get submit() {
    return cy.get("#submit");
  }
  static get outputName() {
    return cy.get("p[id='name']");
  }
  static get outputEmail() {
    return cy.get("p[id='email'");
  }
  static get outputCurrentAddress() {
    return cy.get("p[id='currentAddress']");
  }
  static get outputPermanentAddress() {
    return cy.get("p[id='permanentAddress']");
  }





}

export default TextBoxPage;
