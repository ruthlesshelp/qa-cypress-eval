/// <reference types="Cypress" />

const selectablePageURL = '/selectable/',
    selectableItemsListLocator = '#selectable';

describe('Interactions: Selectable Page', () => {
    before(() => {
        cy.visit(selectablePageURL)
    })

    it('should select Item 4', () => {
        cy.get(selectableItemsListLocator)
            .find('li')
            .eq(3)
            .click()
            .should('have.class', 'ui-selected')
    })
})
