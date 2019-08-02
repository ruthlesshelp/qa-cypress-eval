/// <reference types="Cypress" />

const checkboxPageUrl = '/checkboxradio/',
    data = {
        location: 'Paris',
        hotelRating: {
            Two: '2 Star',
            Four: '4 Star'
        },
        bedtype: '2 Double'
    };

describe(`Widgets: Checkbox radio Page`, () => {
    beforeEach(() => {
        cy.visit(checkboxPageUrl)
    })

    it(`should select Paris radio button as location`, () => {
        cy.contains(data.location).click()
            .should('have.class', 'ui-checkboxradio-checked')
            .and('have.class', 'ui-state-active')
    })

    it(`should click on 4 star checbox as rating`, () => {
        cy.contains(data.hotelRating.Two).click()
            .should('have.class', 'ui-checkboxradio-checked')
            .siblings('input')
            .should('have.attr', 'type', 'checkbox')
    })

    it(`should click on multiple checkbox for rating`, () => {
        cy.contains(data.hotelRating.Four).click()
            .should('have.class', 'ui-checkboxradio-checked')
        cy.contains(data.hotelRating.Two).click()
            .should('have.class', 'ui-checkboxradio-checked')
    })

    it(`should click on 2 queen checkbox as bed type`, () => {
        cy.contains(data.bedtype).click()
        .should('have.class', 'ui-checkboxradio-checked')
        .find('input')
        .should('have.attr', 'type', 'checkbox')
    })
})
