/// <reference types="Cypress" />

const sliderPageURL = '/slider/',
    sliderLocator = '#slider > span';

describe(`Widgets: Slider Page`, () => {
    before(() => {
        cy.visit(sliderPageURL)
    })

    it(`should move the slider right by 50%`, () => {
        cy.get(sliderLocator).invoke('attr', 'style', 'left: 61%;')

        cy.get(sliderLocator).should('have.attr', 'style', 'left: 61%;')
    })
})
