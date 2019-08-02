/// <reference types="Cypress" />

const widgetsPageURL = '/category/widgets/';

describe(`ToolsQA: Widgets Page`, () => {
    before(() => {
        cy.visit(widgetsPageURL)
    })

    it(`should contain link labeled as ToolTip`, () => {
        cy.get('#content').find('a').eq(2).should('have.text', 'Tooltip')
    })

    it(`should contain link labeled as Tabs`, () => {
        cy.checkLinkIsVisible('Tabs')
    })

    it(`should contain link labeled as Spinner`, () => {
        cy.checkLinkIsVisible('Spinner')
    })

    it(`should contain link labeled as Slider`, () => {
        cy.checkLinkIsVisible('Slider')
    })

    it(`should contain link labeled as SelectMenu`, () => {
        cy.checkLinkIsVisible('Selectmenu')
    })

    it(`should contain link labeled as Progressbar`, () => {
        cy.checkLinkIsVisible('Progressbar')
    })

    it(`should contain link labeled as Menu`, () => {
        cy.checkLinkIsVisible('Menu')
    })

    it(`should contain link labeled as Dialog`, () => {
        cy.checkLinkIsVisible('Dialog')
    })

    it(`should contain link labeled as DatePicker`, () => {
        cy.checkLinkIsVisible('Datepicker')
    })

    it(`should contain link labeled as ControlGroup`, () => {
        cy.checkLinkIsVisible('Controlgroup')
    })

    it(`should contain link labeled as CheckBoxRadio`, () => {
        cy.checkLinkIsVisible('Checkboxradio')
    })

    it(`should contain link labeled as Button`, () => {
        cy.checkLinkIsVisible('Button')
    })

    it(`should contain link labeled as Autocomplete`, () => {
        cy.checkLinkIsVisible('Autocomplete')
    })

    it(`should contain link labeled as Accordion`, () => {
        cy.checkLinkIsVisible('Accordion')
    })
})