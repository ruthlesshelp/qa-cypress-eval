// const AUTOCOMPLETE_URL = '/autocomplete/'

describe('Widgets tab', () => {
	before(() => {
		cy.visit(Cypress.config().baseUrl)

		.then(() => {

			// Go to 'Widgets' tab from the top menu
			cy.get('#menu-top .menu-item').eq(2).click()

			.then(() => {
				// Check the page body section should display 'Widgets'
				cy.get('.entry-title')
				  .should('contain', 'Widgets')

				cy.get('#content .entry-title')
				  .should('be.visible')

				// Check one of the known 'Widgets' list component
				cy.get('#content .demo-frame li').eq(2)
				  .should('contain', 'Tabs').should('be.visible')
			});
		});
	});

	afterEach(() => {
	});

	describe('Test each UI element', () => {
		describe('Test 3rd Component - Tabs', () => {
			it('Navigate to Tabs tab', () => {

				// Navigate to Tabs tab
				cy.get('#content .demo-frame li a').eq(2).click()
				// By default, the first tab is selected and expanded
				cy.get('#tabs li').eq(0).should('have.attr', 'aria-expanded', 'true')
				// Paragraph should be visible
				cy.get('#tabs-1 p').eq(0).should('be.visible')
			});

			it('Click on the 3rd tab', () => {

				// Click on the 3rd tab
				cy.get('#tabs li').eq(2).click()

				// First tab should be collapsed, and 3rd tab should be expanded
				cy.get('#tabs li').eq(0).should('have.attr', 'aria-expanded', 'false')
				cy.get('#tabs li').eq(2).should('have.attr', 'aria-expanded', 'true')

				// // The following assertions do not work, to fix
				cy.get('#tabs-3 p').eq(0).should('be.visible')
				cy.get('#tabs-1 p').eq(0).should('not.be.visible')
			});
		});

		describe.only('Test Component - Dialog', () => {
			it('Navigate to Dialog tab', () => {

				// Navigate to Dialog tab
				cy.get('#content .demo-frame li a').eq(8).click()
				cy.get('.entry-title')
				  .should('contain', 'Dialog')

				cy.get('.ui-dialog').should('be.visible')
			});

			it.skip('Drag and Drop dialog', () => {
				// Please refer to Interactions - Draggable tests
			});

			it.skip('Resize dialog', () => {
				// TO DO
			});

			it('Close dialog', () => {

				// Close the dialog
				cy.get('.ui-dialog button').click()

				// The dialog should no longer be visible
				cy.get('.ui-dialog').should('not.be.visible')
			});
		});
	});
});



