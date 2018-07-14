describe("Log Page testing", () => {
  it("Has a job application page", () => {
    cy.visit("http://localhost:3000/");
    cy.get(".title").should("have.text", "oilChange");


  });
});


