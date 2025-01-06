/// <reference types = "cypress" />

// Above line is for cypress automatic text completion

beforeEach("Launch the URL", () => {
  cy.visit("https://the-internet.herokuapp.com/");
});

it("Enter sample input", () => {
  cy.get(":nth-child(21) > a").click();
  cy.get("#username").type("tomsmith");
  cy.get("#password").type("SuperSecretPassword!");
  cy.get(".fa").click();
  cy.contains("Secure Area");
});

