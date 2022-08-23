import BasePage from "./basePage";

class WebTablesPage extends BasePage {
  static get url() {
    return "/webtables";
  }

  static get addRecordButton() {
    return cy.get("#addNewRecordButton");
  }

  static get firstName() {
    return cy.get("[placeholder='First Name']");
  }

  static get lastName() {
    return cy.get("[placeholder='Last Name']");
  }

  static get emailName() {
    return cy.get("[placeholder='name@example.com']");
  }

  static get ageNumber() {
    return cy.get("[placeholder='Age']");
  }

  static get salary() {
    return cy.get("[placeholder='Salary']");
  }

  static get department() {
    return cy.get("[placeholder='Department']");
  }

  static get clickSubmit() {
    return cy.get("#submit");
  }

  static get search() {
    return cy.get("[placeholder='Type to search']");
  }
}

export default WebTablesPage;