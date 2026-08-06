describe('Busca de produtos', () => {

  beforeEach(() => {
    cy.visit('https://automationexercise.com');
  });

  it('Deve buscar um produto com sucesso', () => {

    cy.contains('Products')
      .click();

    cy.get('#search_product')
      .should('be.visible')
      .type('Blue Top');

    cy.get('#submit_search')
      .click();

    cy.contains('Blue Top')
      .should('be.visible');

  });

});