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
    cy.login(emailUserOne, passUserOne);
    cy.contains(emailUserOne).should("be.visible");
    cy.contains("Add new").should("be.visible").and("have.class", "btn");
  });

  it("Wrong password", () => {
    cy.visit("/");
    cy.login("bropet@mail.ru");
    cy.get("#pass").then(($el) => {
      expect($el[0].checkValidity()).eq(false);
    });
  });

  it("Create a new book", () => {
    cy.visit("/");
    cy.login(emailUserTwo, passUserTwo);
    cy.contains("Add new").click();
    cy.get("#title").type("Грозовой перевал");
    cy.get("#description").type("Роман");
    cy.get("#authors").type("Эмили Бронте");
    cy.get("form > .ml-2").click();
    cy.contains("Эмили Бронте").should("be.visible");
  });
  it("add to favorite", () => {
    cy.visit("/");
    cy.login(emailUserOne, passUserOne);
    cy.contains("Add new").click();
    cy.get("#title").type("Грозовой перевал");
    cy.get("#description").type("Роман");
    cy.get("#authors").type("Эмили Бронте");
    cy.get("form > .ml-2").click();
    cy.get(
      "#root > div > div > div > a:nth-child(1) > div > div.card-footer > button"
    ).click();
    cy.get("h4").click();
    cy.contains("Эмили Бронте").should("be.visible");
  });

  it("Delete from favorite", () => {
    cy.visit("/");
    cy.login(emailUserOne, passUserOne);
    cy.get("h4").click();
    cy.get("#root > div > div > a > div > div.card-footer > button").click();
    cy.contains("Please add some book to favorit on home page!").should(
      "be.visible"
    );
  });
});
