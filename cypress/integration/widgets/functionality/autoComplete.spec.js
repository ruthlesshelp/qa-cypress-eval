/// <reference types="Cypress" />

const autoCompletePageUrl = '/autocomplete/',
    tagInputLocator = '#tags',
    autoSuggestionListLocator = 'ul.ui-autocomplete';

describe(`Widgets: Autocomplete Page`, () => {
    beforeEach(() => {
        cy.visit(autoCompletePageUrl)
    })

    it(`should show 'ActionScript' as suggestion when user types 'Actio'`, () => {
        cy.get(tagInputLocator).type('Actio')

        cy.get(autoSuggestionListLocator).find('li').should('have.text','ActionScript')
    })

    it(`should not show any suggestion when user types '123'`,() => {
        cy.get(tagInputLocator).type('123')

        cy.get(autoSuggestionListLocator).should('not.have.descendants')
    })
    
})
