/// <reference types="Cypress" />

const spinnerPageURL = '/spinner/',
    spinnerLocator = '#spinner',
    disableInputToggleLocator = '#disable',
    disableWidgetToggleLocator = '#destroy',
    getValueButtonLocator = '#getvalue',
    setValueButtonLocator = '#setvalue';

describe(`Widgets: Spinner Page`, () => {
    beforeEach(() => {
        cy.visit(spinnerPageURL)
        cy.get(spinnerLocator).type('6')
    })

    it(`Spinner up button should increase the current value by 1`, () => {
        cy.get('.ui-spinner-up').click()
        cy.get(spinnerLocator).invoke('val').should('be.deep.equal', '7')
    })

    it(`Spinner down button should decrease the current value by 1`, () => {
        cy.get('.ui-spinner-down').click()
        cy.get(spinnerLocator).invoke('val').should('be.deep.equal', '5')
    })

    it(`Toggle enable/disable button should disable the input box`, () => {
        cy.get(disableInputToggleLocator).click()
        cy.get(spinnerLocator).should('be.disabled')
    })

    it(`Toggle widget button should disable the spinner button`, () => {
        cy.get(disableWidgetToggleLocator).click()
        cy.get('.ui-spinner-up').should('not.exist')
        cy.get('.ui-spinner-down').should('not.exist')
    })

    it(`Set value button should display 5 in the input box`, () => {
        cy.get(setValueButtonLocator).click()
        cy.get(spinnerLocator).invoke('val').should('be.deep.equal', '5')
    })

    it(`Get button should display the current value in input box`, () => {
        cy.get(getValueButtonLocator).click()
        cy.on('window:alert', function (alertText) {
            expect(alertText).to.deep.equal(6);
        })
    })
})
