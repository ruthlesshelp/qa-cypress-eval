/// <reference types="Cypress" />

const controlGroupPageUrl = '/controlgroup/';

describe(`Widgets: ControlGroup Page`, () => {
    beforeEach(() => {
        cy.visit(controlGroupPageUrl)
    })

    it(`should show all Controls in horizontal for Rental Car`, () => {
        cy.get('div.widget').find('legend').eq(0)
        .should('have.text','Rental Car')
        .siblings('div')
        .should('have.class','ui-controlgroup-horizontal')
    })

    it(`should show all Controls in vertical for Rental Car`, () => {
        cy.get('div.widget').find('legend').eq(1)
        .should('have.text','Rental Car')
        .siblings('div')
        .should('have.class','ui-controlgroup-vertical')
    })
})
