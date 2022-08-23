import BasePage from "./basePage";

class checkBoxPage extends BasePage {
    static get url() {
        return "/checkbox";
    }

    static get expandButton() {
        return cy.get("[class='rct-icon rct-icon-expand-all']");
    }

    static get clickNotes() {
        return cy.get("label[for='tree-node-notes']");
    }

    static get clickReact() {
        return cy.get("label[for='tree-node-react']");
    }

    static get clickAngular() {
        return cy.get("label[for='tree-node-angular']");
    }

    static get clickGeneral() {
        return cy.get("label[for='tree-node-general']");
    }

    static get clickExcelFile() {
        return cy.get("label[for='tree-node-excelFile']");
    }

    static get outputNotes() {
        return cy.get("[class='text-success']");
    }

    static get outputReact() {
        return cy.get("[class='text-success']")
    }
    static get outputAngular() {
        return cy.get("[class='text-success']");
    }

    static get outputGeneral() {
        return cy.get("[class='text-success']");
    }

    static get outputExcelFile() {
        return cy.get("[class='text-success']");
    }

    static get expandButton() {
        return cy.get("[class='rct-icon rct-icon-expand-all']");
    }

    static get clickOffice() {
        return cy.get("label[for='tree-node-office']");
    }

    static get outputOffice() {
        return cy.get("[class='text-success']");
    }
}

export default checkBoxPage;