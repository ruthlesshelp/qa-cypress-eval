/// <reference types="Cypress" />

const progressBarPageURL = '/progressbar/',
    progressBarLocator = '#progressbar > div';

describe(`Widgets: ProgressBar Page`, () => {
    before(() => {
        cy.visit(progressBarPageURL)
    })

    it(`should show 39% progress`, () => {
        cy.get(progressBarLocator)
            .invoke('attr', 'style')
            .should('be.equal', 'width: 39%;')
    })
})
