/// <reference types="Cypress" />

const droppablePageURL = '/droppable/',
    dragBoxLocator = '.ui-draggable-handle',
    dropBoxLocator = '.ui-droppable';

describe('Interactions: Droppable Page', () => {
    before(() => {
        cy.visit(droppablePageURL)
    })
    
    it('should drag item and drop in the target box', () => {
        cy.get(dragBoxLocator).trigger('mousedown', { which: 1 })
        cy.get(dropBoxLocator).trigger("mousemove", { clientX: 300, clientY: 400 }).trigger('mouseup', { force: true })
    })
})
