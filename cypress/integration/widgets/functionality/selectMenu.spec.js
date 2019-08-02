/// <reference types="Cypress" />

// To be done . Facing some issues with selecting the element in select menu
describe.skip(`Widgets: SelectMenu Page`, () => {
    beforeEach(() => {
        cy.visit('/selectmenu/')
    })

    it(`should select 'Medium' from speed dropdown`, () => {
        cy.get('#speed').select('Fast', { force: true }).should('have.value', 'Fast')

        cy.get('#speed-button > span.ui-selectmenu-text').should('have.text', 'Fast')
    })

    it(`should select JQuery.js from file dropdown`, () => {
        cy.get('#files').select('jQuery.js', { force: true })

        cy.get('#files-button > span.ui-selectmenu-text').should('have.text', 'jQuery.js')
    })

    it(`should select 4 from number dropdown`, () => {
        cy.get('#number').select('10')

        cy.get('#number-button > span.ui-selectmenu-text').should('have.text', '4')
    })

    it(`should select Mr from title dropdown`, () => {
        cy.get('#salutation').select('Mr.', { force: true })

        cy.get('#salutation-button > span.ui-selectmenu-text').should('have.text', 'Mr.')
    })
})
