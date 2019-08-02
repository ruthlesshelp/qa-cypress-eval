/// <reference types="Cypress" />

const sortablePageURL = '/sortable/',
    sortableItemsListLocator = '#sortable';

// To be worked on. Analyse why the item doesnt get placed in the list below another item.
describe('Interactions: Sortable Page', () => {
    before(() => {
        cy.visit(sortablePageURL)
    })

    it('should sort items', () => {
        cy.get(sortableItemsListLocator)
            .find('li').eq(2)
            .should('have.text', 'Item 3')
            .trigger('mousedown', { which: 1 })
            .trigger('mousemove', { pageX: 515, pageY: 590 })
            .trigger('mouseup', { force: true })
    })
})
