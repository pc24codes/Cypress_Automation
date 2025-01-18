/// <reference types="cypress" />


import { HomePage } from "../../PageObjects/Homepage";
import { LoginPage } from "../../PageObjects/LoginPage";


let objLoginPage = new LoginPage();
let objHomePage = new HomePage();


beforeEach(() => {
    cy.visit("https://www.saucedemo.com/");
    cy.fixture('LoginTestData').as('ObjLoginData');
    cy.fixture('OrderDetailsData').as('objOrderDetails')

})



it("User adds a product", function () {

    const standardUser = this.ObjLoginData.StandardUser

    objLoginPage.navigate();
    objLoginPage.enterUserName(standardUser["username"]);
    objLoginPage.enterPassword(standardUser["password"]);
    objLoginPage.clickLogin();
    objHomePage.addBackPack();
    objHomePage.addLights();
    objHomePage.viewCart();

    cy.contains('Your Cart').should('be.visible');
    cy.log("User is in your cart page");
})

it("User adds a product and buys it", function () {

    const orderDetails = this.objOrderDetails.OrderOne;
    const standardUser = this.ObjLoginData.StandardUser

    objLoginPage.navigate();
    objLoginPage.enterUserName(standardUser["username"]);
    objLoginPage.enterPassword(standardUser["password"]);
    objLoginPage.clickLogin();
    objHomePage.addBackPack();
    objHomePage.addLights();
    objHomePage.viewCart();

    cy.contains('Your Cart').should('be.visible');
    cy.log("User is in your cart page");
    objHomePage.checkOutElement();
    objHomePage.enterFirstName(orderDetails["FirstName"])
    objHomePage.enterLastName(orderDetails["LastName"])
    objHomePage.enterZipCode(orderDetails["ZipCode"])
    objHomePage.clickContinueButton();
    cy.screenshot("Total Page");
    objHomePage.clickFinishButton();
    cy.get('[data-test="complete-header"]').should('be.visible');
})
