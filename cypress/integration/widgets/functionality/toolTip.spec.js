/// <reference types="Cypress" />

const toolTipPageURL = '/tooltip/',
    ageInputFieldLocator = '#age';

describe(`Widgets: ToolTip Page`, () => {
    before(() => {
        cy.visit(toolTipPageURL)
    })

    it(`should display tool tip message`, () => {
        cy.get(ageInputFieldLocator).trigger('mouseover')

        cy.get('.ui-tooltip-content').invoke('text').should('be.deep.equal', 'We ask for your age only for statistical purposes.')

    })
})
