/// <reference types="Cypress" />

const accordionPageUrl = '/accordion/',
    section2HeadingLocator = '#accordion > h3#ui-id-3',
    section2TextLocator = '#ui-id-4',
    section3HeadingLocator = '#accordion > h3#ui-id-5';

describe(`Widgets: Accordion Page`, () => {
    beforeEach(() => {
        cy.visit(accordionPageUrl)
        cy.get(section2HeadingLocator).click()
    })
    it(`should expand Section 2 text when clicked`, () => {
        cy.get(section2HeadingLocator)
            .should('have.attr', 'aria-expanded', 'true')
            .should('have.class', 'ui-state-active')
    })

    it('should show text for Section 2 when clicked', () => {
        cy.get(section2TextLocator).should('be.visible')
            .should('contain.text', 'non urna')
    })

    it(`should not expannd section 3 when section 2 is opened`, () => {
        cy.get(section3HeadingLocator)
            .should('have.attr', 'aria-expanded', 'false')
    })
})
