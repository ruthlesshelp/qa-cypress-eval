/// <reference types="Cypress" />

const interactionsPageURL = '/category/interactions/';

describe('ToolsQA: Interactions Page', () => {
    before(() => {
        cy.visit(interactionsPageURL)
    })
    it('should contain Sortable link', () => {
        cy.checkLinkIsVisible('Sortable')
    })

    it('should contain Selectable link', () => {
        cy.checkLinkIsVisible('Selectable')
    })

    it('should contain Resizeable link', () => {
        cy.checkLinkIsVisible('Resizable')
    })

    it('should contain Droppable link', () => {
        cy.checkLinkIsVisible('Droppable')
    })

    it('should contain Draggable link', () => {
        cy.checkLinkIsVisible('Draggable')
    })
})