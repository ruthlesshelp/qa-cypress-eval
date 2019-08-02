/// <reference types="Cypress" />

const menuPageURL = '/menu/';

describe(`Widgets: Menu Page`, () => {
    before(() => {
        cy.visit(menuPageURL)
    })

    it(`should show Music in menu level 1`, () => {
        cy.contains('Music').should('be.visible')
    })

    it('should show Music wihout expanded', () => {
        cy.contains('Music').siblings('ul').should('be.hidden')
    })

    it(`should show Rock in menu level 2`, () => {
        cy.contains('Music').trigger('mouseover')
        cy.contains('Rock').should('be.visible')
    })

    it(`should show Alternative in menu level 3`, () => {
        cy.contains('Music').trigger('mouseover')
        cy.contains('Rock').trigger('mouseover')
        cy.contains('Alternative').should('be.visible')
    })
})
