/// <reference types="Cypress" />

const draggablePageURL = '/draggable/',
    dragBoxLocator = '.ui-draggable-handle';

describe('Interactions: Draggable Page', () => {
    before(() => {
        cy.visit(draggablePageURL)
    })
    it('should drag item to the right', () => {
        cy.get(dragBoxLocator).trigger('mousedown', { which: 1 }).trigger('mousemove', { pageX: 600, pageY: 400 })
            .should('have.class', 'ui-draggable-dragging')
            .trigger('mouseup', { force: true })
    })
})