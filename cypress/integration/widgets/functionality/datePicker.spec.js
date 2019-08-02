/// <reference types="Cypress" />

// To be worked on. Facing some issues selecting date from the calendar
describe.skip(`Widgets: DatePicker Page`, () => {
    before(() => {
        cy.visit('/datepicker/')
    })
    it('should show datepicker when user clicks on Date input box', () => {

    })

    it(`should select 9 September 2019 date`, () => {
        cy.get('#datepicker').click()
        cy.get('#ui-datepicker-div').within(function (el) {
            cy.get(el).find('a').contains('9').click()
        })
    })
})
