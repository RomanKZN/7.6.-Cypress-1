const emailUserOne = "bropet@mail.ru";
const passUserOne = "123";
const emailUserTwo = "test@test.com";
const passUserTwo = "test";
const url = "/";

describe("Positive http://localhost:3000/ tests", () => {
  it("Should open the books page", () => {
    cy.visit("/");
    cy.contains("Books list").should("be.visible");
  });

  it("Must be logged in userOne", () => {
    cy.visit("/");
    cy.login1(emailUserOne, passUserOne);
    cy.contains(emailUserOne).should("be.visible");
  });
  it("Must be logged in userTwo", () => {
    cy.visit("/");
    cy.login2(emailUserTwo, passUserTwo);
    cy.contains(emailUserTwo).should("be.visible");
    cy.contains("Add new").should("be.visible").and("have.class", "btn");
  });

  it("Wrong password", () => {
    cy.visit("/");
    cy.login1("bropet@mail.ru");
    cy.get("#pass").then(($el) => {
      expect($el[0].checkValidity()).eq(false);
    });
  });

  it("Create a new book", () => {
    cy.visit("/");
    cy.login2(emailUserTwo, passUserTwo);
    cy.contains("Add new").click();
    cy.get("#title").type("Грозовой перевал");
    cy.get("#description").type("Роман");
    cy.get("#authors").type("Эмили Бронте");
    cy.get("form > .ml-2").click();
    cy.contains("Эмили Бронте").should("be.visible");
  });
  it("add to favorite", () => {
    cy.visit("/");
    cy.login2(emailUserTwo, passUserTwo);
    cy.get(
      '[href="book/294dfc8e-c666-4bd4-8b68-db244483a728"] > .h-100 > .card-footer > .btn'
    ).click();
    cy.get("h4").click();
    cy.contains("Эмили Бронте").should("be.visible");
  });

  it("Delete from favorite", () => {
    cy.visit("/");
    cy.login2(emailUserTwo, passUserTwo);
    cy.get("h4").click();
    cy.get(
      '[href="book/294dfc8e-c666-4bd4-8b68-db244483a728"] > .h-100 > .card-footer > .btn'
    ).click();
    cy.contains("Please add some book to favorit on home page!").should(
      "be.visible"
    );
  });
});
