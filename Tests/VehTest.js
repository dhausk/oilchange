describe('Vehicle Page testing', () => {
  it('Has a job application page', () => {
    cy.visit('http://localhost:3000/');
    cy.get('.title').should('have.text', 'Oil Change');
    cy.get('.header-nav button').should('have.length', 3);
    cy.get('.splash h1').should('have.text', 'Oil Change');
    cy.get('.splash button').click()
    cy.url().should('eq', 'http://localhost:3000/Vehicles');
    cy.get('.veh-selection h2').should('have.text', 'Select your vehicle');
    cy.get('.add-button').click();
    cy.get('.add-veh .form').within(() => {
      cy.get('input[name="make"]').type('Chrysler');
      cy.get('input[name="model"]').type('300');
      cy.get('input[name="year"]').type('2009');
      cy.get('textarea[name="note"]').type('V8 baby');
      cy.get('.form-submit').click();
    });
    cy.get('.card-div').should('have.length.gte', 0);
    cy.get('.card-div').first().within(card => {
      cy.get('.make').should('have.text', 'Make: Chrysler');
      cy.get('.model').should('have.text', 'Model: 300');
      cy.get('.year').should('have.text', 'Year: 2009');
      cy.get('.details').should('have.text', 'Details: V8 baby');
      cy.get('.card-button').eq(1).click();
    })
    cy.get('.update-veh .form').within(() => {
      cy.get('input[name="make"]').should('have.value', 'Chrysler').clear().type('Honda');
      cy.get('input[name="model"]').should('have.value', '300').clear().type('S2000');
      cy.get('input[name="year"]').should('have.value', '2009');
      cy.get('textarea[name="note"]').should('have.value', 'V8 baby')
      cy.get('.form-submit').click();
    });
    cy.get('.card-div').first().within(card => {
      cy.get('.make').should('have.text', 'Make: Honda');
      cy.get('.model').should('have.text', 'Model: S2000');
      cy.get('.card-button').eq(2).click();
    })
  });
});
