/// <reference types="Cypress" />
const dialogPageURL = '/dialog/',
    dialogBoxLocator = '[role=dialog]';

describe(`Widgets: Dialog Page`, () => {
    before(() => {
        cy.visit(dialogPageURL)
    })

    it(`should show Dialog box`, () => {
        cy.get(dialogBoxLocator).should('be.visible')
    })

    it(`should not show dialog box when closed`, () => {
        cy.get(dialogBoxLocator).find('button').click()
        cy.get(dialogBoxLocator).should('not.be.visible')
    })
})
