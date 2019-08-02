/// <reference types="Cypress" />

const doubleAndRightClickPageUrl = '/tooltip-and-double-click/',
    doubleClickButtonLocator = '#doubleClickBtn',
    rightClickButtonLocator = '#rightClickBtn';

describe(`ToolsQA: ToolTip & Double-Click Page`, () => {
    beforeEach(() => {
        cy.visit(doubleAndRightClickPageUrl)
    })

    it(`should show alert message when double clicked`, () => {
        cy.get(doubleClickButtonLocator).dblclick()
        cy.on('window:alert', function (alertText) {
            expect(alertText).to.contain('Hi,You are seeing this message as you have double cliked on the button');
        })
    })

    it(`should show context menu when right clicked`, () => {
        cy.get(rightClickButtonLocator).trigger('contextmenu')
            .should('have.css', 'display', 'inline-block')
    })
})
