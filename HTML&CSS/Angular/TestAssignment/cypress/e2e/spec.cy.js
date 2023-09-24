describe("template spec", () => {
  it("passes", () => {
    cy.visit("https://example.cypress.io");
  });
});

describe("Does visit", () => {
  beforeEach(() => {
    cy.visit("http://localhost:4200");
  });
  it("Checks Home", () => {
    cy.visit("http://localhost:4200");
    // cy.get('nav').contains('Blog Website').should('have.attr', 'routerLink', '/');
    cy.get("nav").should("contain", "Home");
  });

  it("Fills out and submits the form successfully", () => {
    cy.get("input[name=username]").type("user");
    cy.get("input[name=password]").type("pass");
    cy.get("button").contains("Login Id Pass").click();
    // cy.url().should("eq", "http://localhost:4200/blog"); 
})

it("Fills out and submits the form successfully signup", () => {
  cy.get("nav").get(".navbar-toggler").click();
  cy.get('.nav-link dropdown-toggle').cy.get("Sign In").click();
  // cy.get("Sign In").click();
  cy.get("input[name=username]").type("user");
  cy.get("input[name=password]").type("pass");
  cy.get("button").contains("Sign Up").click();
  // cy.url().should("eq", "http://localhost:4200/blog"); 
})

  it("Validates username input", () => {
    // cy.get("button").contains("Login Id Pass").click();
    cy.get("input[name=username]").type("ab");
    cy.get("input[name=password]").type("pass");
    cy.get(".alert.alert-danger").should("contain", "Username Invalid (3 or more letters required)");
  });
});

// it("Visit Google", () => {
//   cy.visit("https://www.google.co.in/");
// });
