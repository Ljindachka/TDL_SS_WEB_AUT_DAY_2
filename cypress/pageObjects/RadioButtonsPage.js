import BasePage from "./basePage";

class RadioButtonsPage extends BasePage {
    static get url() {
        return "/radio-button";
    }

    static get buttonYes() {
        return cy.get("[for='yesRadio']");
    }

    static get outputButtonYes() {
        return cy.get("[class='text-success']");
    }

    static get buttonImpressive() {
        return cy.get("[for='impressiveRadio']");
    }

    static get outputButtonImpressive() {
        return cy.get("[class='text-success']");
    }

    static get buttonNo() {
        return cy.get("#noRadio");
    }
}
export default RadioButtonsPage;