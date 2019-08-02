/// <reference types="Cypress" />

const buttonPageUrl = '/button/',
    widgetHeading = 'Widget Buttons',
    cssHeading = 'CSS Buttons';

describe(`Widgets: Button Page`, () => {
    beforeEach(() => {
        cy.visit(buttonPageUrl)
    })

    it(`should show submit widget button`, () => {
        cy.contains(widgetHeading).siblings('input')
            .should('be.visible')
            .should('have.attr', 'type', 'submit')
            .should('have.value', 'A submit button')
    })

    it('should show anchor widget button', () => {
        cy.contains(widgetHeading).siblings('a')
            .should('have.attr', 'href', '#')
    })

    it(`should show css Button element`, () => {
        cy.contains(cssHeading).siblings('button')
            .should('be.visible')
            .should('have.class', 'ui-widget')
            .should('have.text', 'A button element')
    })

})
