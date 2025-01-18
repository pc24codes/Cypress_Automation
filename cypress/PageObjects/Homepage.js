///<reference types= "cypress"/>

export class HomePage {

    addBackPack() {
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    }

    addLights() {
        cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click();
    }

    viewCart() {
        cy.get('[data-test="shopping-cart-link"]').click();
    }

    checkOutElement() {
        cy.get('[data-test="checkout"]').click()
    }

    enterFirstName(firstName) {
        cy.get('[data-test="firstName"]').type(firstName)
    }

    enterLastName(lastName) {
        cy.get('[data-test="lastName"]').type(lastName);
    }

    enterZipCode(zipCode) {
        cy.get('[data-test="postalCode"]').type(zipCode)
    }

    clickContinueButton() {
        cy.get('[data-test="continue"]').click();
    }

    clickFinishButton() {
        cy.get('[data-test="finish"]').click();
    }

}