/// <reference types="Cypress" />

const resizablePageURL = '/resizable/',
    resizableBoxLocator = '#resizable';

describe('Interactions: Resizeable Page', () => {
    before(() => {
        cy.visit(resizablePageURL)
    })
    
    it('should resize box width to 398px and height to 168px', () => {
        cy.get(resizableBoxLocator)
            .invoke('css', 'width', '398px')
            .invoke('css', 'height', '168px')
            .should('have.css', 'width', '398px')
            .should('have.css', 'height', '168px')
    })
})
