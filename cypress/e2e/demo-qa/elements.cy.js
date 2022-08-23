import TextBoxPage from "../../pageObjects/textBoxPage";
import checkBoxPage from "../../pageObjects/checkBoxPage";
import RadioButtonsPage from "../../pageObjects/RadioButtonsPage";
import WebTablesPage from "../../pageObjects/WebTablesPage";

// Create textbox scenario
context("Elements Page", () => {
  context("Text box scenarios", () => {
    beforeEach(() => {
      TextBoxPage.visit();
    });

    // Fill in textboxes with necessary information
    it("Filling in Text Boxes", () => {
      TextBoxPage.fullName.type("Linda");
      TextBoxPage.emailBox.type("austelinda@gmail.com");
      TextBoxPage.currentAddress.type("This is current address");
      TextBoxPage.permanentAddress.type("This is permanent address");
      TextBoxPage.submit.click();
      // Validation of paragraphs
      TextBoxPage.outputName.should("contain", "Linda");
      TextBoxPage.outputEmail.should("contain", "austelinda@gmail.com");
      TextBoxPage.outputCurrentAddress.should("contain", "This is current address");
      TextBoxPage.outputPermanentAddress.should("contain", "This is permanent address");
    });
  });

  // Create CheckBoxPage page object
  context("Check box scenarios", () => {
    beforeEach(() => {
      checkBoxPage.visit();
    });

    // Create checkbox scenario 1:
    it("Clicking Check boxes", () => {
      // Click the "+"/expand button
      checkBoxPage.expandButton.click();
      // Click Notes, React, Angular, General, Excel File.doc
      checkBoxPage.clickNotes.click();
      checkBoxPage.clickReact.click();
      checkBoxPage.clickAngular.click();
      checkBoxPage.clickGeneral.click();
      checkBoxPage.clickExcelFile.click();
      // Validate the clicked checkboxes
      checkBoxPage.outputNotes.should("contain", "notes");
      checkBoxPage.outputReact.should("contain", "react");
      checkBoxPage.outputAngular.should("contain", "angular");
      checkBoxPage.outputGeneral.should("contain", "general");
      checkBoxPage.outputExcelFile.should("contain", "excelFile");
    })

    // Create checkbox scenario 2:
    it("Clicking Check boxes 2", () => {
      // Click expand button
      checkBoxPage.expandButton.click();
      // Click Office
      checkBoxPage.clickOffice.click();
      // Validate the checked checkboxes
      checkBoxPage.outputOffice.should("contain", "office");
      checkBoxPage.outputOffice.should("contain", "public");
      checkBoxPage.outputOffice.should("contain", "private");
      checkBoxPage.outputOffice.should("contain", "classified");
      checkBoxPage.outputOffice.should("contain", "general");
    })
  });

  context("Radio button scenarios", () => {
    beforeEach(() => {
      RadioButtonsPage.visit();
    });
    // Create RadioButtons page object
    // Scenario 1:
    it("Clicking Radio buttons", () => {
    // Click yesButton
    RadioButtonsPage.buttonYes.click();
    //validate the message
    RadioButtonsPage.outputButtonYes.should("contain", "Yes");
    // click impressiveButton
    RadioButtonsPage.buttonImpressive.click();
    // validate the message
    RadioButtonsPage.outputButtonImpressive.should("contain", "Impressive");
    // noButton - validate that the button exists but is disabled
    RadioButtonsPage.buttonNo.should("have.disabled", "True");
    })
  });

  context("Web tables scenarios", () => {
    beforeEach(() => {
      WebTablesPage.visit();
    });
    // Create WebTables page object
    // Create scenario 1:
    it.only("Web tables actions", () => {
    // Click add record button
    WebTablesPage.addRecordButton.click();
     // fill in the necessary information
    WebTablesPage.firstName.type("Linda");
    WebTablesPage.lastName.type("Aušte");
    WebTablesPage.emailName.type("austelinda@gmail.com");
    WebTablesPage.ageNumber.type("25");
    WebTablesPage.salary.type("1000000");
    WebTablesPage.department.type("TestDevLab");
    // click submit button
    WebTablesPage.clickSubmit.click();
    // search for the user based on previously added information
    WebTablesPage.search.type("Linda");
    // validate tha the user is visible

    })
    // click submit button
    // search for the user based on previously added information
    // validate tha the user is visible

    // Create Scenario 2:
    // Delete all table rows
    // Validate that we see text - No rows found
  });

  context("Buttons scenarios", () => {
    // Create buttons clicking scenario
    // Create Buttons page
    // Check documentation https://docs.cypress.io/api/commands/and for how to perform different types of clicking
    // Click Double click button
    // Validate the double click message
    // Click rightclick button
    // Validate the right click message
    // Do dynamic click
    // Validate dynamic click message
  });
});
