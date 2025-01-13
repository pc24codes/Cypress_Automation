/// <reference types = "cypress"/>

import { LoginPage } from "../../PageObjects/LoginPage";

//create a class reference
let loginPage = new LoginPage()

beforeEach(() => {
    cy.fixture('LoginTestdata').as('testObject');

});

it("Standard User Login", function () {
    const standardUser = this.testObject.StandardUser;


    loginPage.navigate();
    loginPage.enterUserName(standardUser.username)
    loginPage.enterPassword(standardUser.password)
    loginPage.clickLogin()
    loginPage.clickLogout()

})

it('Locked out user login', function () {
    const lockedOutUser = this.testObject.LockedOutUser;


    loginPage.navigate();
    loginPage.enterUserName(lockedOutUser.username)
    loginPage.enterPassword(lockedOutUser.password)
    loginPage.clickLogin();
    cy.get('[data-test="error"]').contains('Epic sadface').should('be.visible')

})

it('Error user login', function () {
    const errorUser = this.testObject.ErrorUser;


    loginPage.navigate();
    loginPage.enterUserName(errorUser["username"])
    loginPage.enterPassword(errorUser["password"])
    loginPage.clickLogin()
    cy.on('window:alert', (confirmText) => {
        expect(confirmText).to.equal('Change your Password');
        return true
    })
    loginPage.clickLogout()
})


