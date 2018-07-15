describe('Vehicle Page testing', () => {
  it('test log functionality', () => {
    cy.visit('http://localhost:3000/');
    cy.get('.splash h1').should('have.text', 'Oil Change');
    cy.get('.splash button').click()
    cy.url().should('eq', 'http://localhost:3000/Vehicles');
    cy.get('.card-div').first().find('.card-button').eq(0).click();
    cy.url().should('eq', 'http://localhost:3000/Log');
    cy.get('.logs-chart h2').should('contain', 'Maintenance log of your Ford F-150');
    cy.get('.add-button').click();
    cy.get('.add-log .form').within(() => {
      cy.get('input[name="maintenance"]').type('Oil change and filter change');
      cy.get('input[name="cost"]').type('20');
      cy.get('textarea[name="note"]').type('all good');
      cy.get('.form-submit').click();
    });
    cy.get('.add-button').click()
    cy.get('.recharts-responsive-container').should('to.exist');
    cy.get('.card-div').should('have.length.gte', 1);
    cy.get('.card-div').first().within(card => {
      cy.get('p').eq(0).should('have.text', 'Maintenance done: Oil change and filter change');
      cy.get('p').eq(2).should('have.text', 'Notes: all good');
      cy.get('p').eq(3).should('have.text', 'Cost: $20');
      cy.get('.card-button').eq(0).click();
    })
    cy.get('.Update-log .form').within(() => {
      cy.get('input[name="maintenance"]').should('have.value', 'Oil change and filter change').clear().type('Oil change and filter change');
      cy.get('.form-submit').click();
    });
    cy.get('.card-div').first().within(card => {
      cy.get('p').eq(0).should('have.text', 'Maintenance done: Oil change and filter change');
      cy.get('.card-button').eq(1).click();
    })
    cy.get('.card-div').first().find('.maintenance').should('not.have.text', 'Maintenance done: Oil Change and filter change');
  });
});  
