// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
Cypress.Commands.add("login1", (emailUserOne, passUserOne) => {
  cy.contains("Log in").click();
  if (emailUserOne) {
    cy.get("#mail").type(emailUserOne);
  }
  if (passUserOne) {
    cy.get("#pass").type(passUserOne);
  }
  cy.contains("Submit").click();
});

Cypress.Commands.add("login2", (emailUserTwo, passUserTwo) => {
  cy.contains("Log in").click();
  if (emailUserTwo) {
    cy.get("#mail").type(emailUserTwo);
  }
  if (passUserTwo) {
    cy.get("#pass").type(passUserTwo);
  }
  cy.contains("Submit").click();
});

//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
