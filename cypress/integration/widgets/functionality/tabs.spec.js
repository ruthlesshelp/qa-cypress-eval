/// <reference types="Cypress" />

const tabsPageURL = '/tabs/';

describe(`Widgets: Tabs Page`, () => {
    beforeEach(() => {
        cy.visit(tabsPageURL)
    })

    it(`should show Nunc tincidunt tab`, () => {
        cy.get('#ui-id-1').should('be.visible')
    })

    it(`should show Proin dolor tab`, () => {
        cy.get('#ui-id-2').should('be.visible')
    })

    it(`should show Aenean lacinia tab`, () => {
        cy.get('#ui-id-3').should('be.visible')
    })

    it(`should display text for  Nunc tincidunt tab when clicked`, () => {
        cy.get('#ui-id-1').click()
        cy.get('#tabs-1').should('not.be.hidden').should('contain.text', 'Proin elit arcu')
    })

    it(`should hide text for Nunc tincidunt tab when Proin dolor tab is clicked`, () => {
        cy.get('#ui-id-1').click()
        cy.get('#tabs-2').should('be.hidden')
    })
})

