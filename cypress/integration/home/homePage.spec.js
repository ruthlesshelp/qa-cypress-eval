/// <reference types="Cypress" />

/**
 * @param {string} tabName Name of the Tab to be searched on webpage. 
 */
function checkTabisVisible(tabName) {
    cy.get(`a[title="${tabName}"]`).should('be.visible')
}

describe('ToolsQA: Landing Page', () => {
    before(() => {
        cy.visit('')
    })
    it('shoulc contain Tools QA as title', () => {
        cy.title().should('contain', 'ToolsQA');
    })

    it('shoulc have Home Tab', () => {
        checkTabisVisible('Home')
    })

    it('shoulc have Interactions Tab', () => {
        checkTabisVisible('Interactions')
    })

    it('shoulc have Widgets Tab', () => {
        checkTabisVisible('Widgets')
    })

    it('shoulc have Tooltip and Double click Tab', () => {
        checkTabisVisible('Tooltip and Double click')
    })

    it('should contain footer message', () => {
        cy.get('footer').find('a')
            .should('have.text', 'TOOLSQA.COM | ALL RIGHTS RESERVED')
            .parent()
            .should('contain.text', '© 2013-2020')
    })
})