describe("Device Test", () => {
  it("a laptop", () => {
    cy.viewport(1366, 768);
    cy.visit("/");
    cy.contains("Log in").should("be.visible");
  });
  it("Smartphone", () => {
    cy.viewport(1080, 2340);
    cy.visit("/");
    cy.contains("Log in").should("be.visible");
  });
  it("Iphone X", () => {
    cy.viewport("iphone-x");
    cy.visit("/");
    cy.contains("Log in").should("be.visible");
  });
});
