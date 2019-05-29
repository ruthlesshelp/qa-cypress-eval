const AUTOCOMPLETE_URL = '/autocomplete/'

describe('Tags: droplist autocomplete', () => {
  before(() => {
    cy.visit(AUTOCOMPLETE_URL)

    cy.url()
      .should('eq', Cypress.config().baseUrl + AUTOCOMPLETE_URL)
  })

  it('should display the Autocomplete title', () => {
    cy.get('.entry-title')
      .should('contain', 'Autocomplete')
  })
})
