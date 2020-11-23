describe("Checks the home page.", () => {
  before(() => {
    cy.visit("/");
  });

  it("Checks for text", () => {
    cy.get(".App-link").should("contain", "React");
  });
});
