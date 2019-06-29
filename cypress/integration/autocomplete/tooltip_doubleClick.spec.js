// const AUTOCOMPLETE_URL = '/autocomplete/'

describe('Tooltip and Double click tab', () => {
	beforeEach(() => {
		cy.visit(Cypress.config().baseUrl)

		.then(() => {

			// Go to 'Tooltip and Double click' tab from the top menu
			cy.get('#menu-top .menu-item').eq(3).click()

			.then(() => {
				// Check the page body section should display 'Tooltip and Double click'
				cy.get('.entry-title')
				  .should('contain', 'Tooltip and Double click')

				cy.get('#content .entry-title')
				  .should('be.visible')

				// Check one of the known 'Tooltip and Double click' list component
				cy.get('#content .demo-frame #doubleClickBtn')
				  .should('contain', 'Hello, Double-click me').should('be.visible')
			});
		});
	});

	afterEach(() => {
	});

	describe('Test each UI element', () => {
		it('1st Component - Double Click', () => {

			const stub = cy.stub()

  			cy.on('window:alert', cy.stub().as('alert'))

			// Double click on the 'Hello, Double-click me' button
			cy.get('#doubleClickBtn').dblclick().then(() => {
				cy.get('@alert').should('have.been.calledWith','Double Click Alert\n\nHi,You are seeing this message as you have double cliked on the button')

				// To Do
				// Click on OK button to dismiss the alert
			})
		});

		// // To Do
		// it('1st Component - Single Click on the Double Click button', () => {
		// 	// Single Click on a Double Click button should do nothing
		// });

		it('2nd Component - Right Click', () => {
  			cy.on('window:alert', cy.stub().as('alert'))

			cy.get('#rightclickItem')
				  .should('not.be.visible')

			// Right click on the Right click button
			cy.get('#rightClickBtn').trigger('contextmenu')
			cy.get('.contextMenuItem').eq(2).click().then(() => {
				cy.get('@alert').should('have.been.calledWith','You have selected Tag')
			});
		});

		// This test does not work currently due to the cy.hover() is not supported
		// All workarounds online seem not working so far
		it.skip('3rd Component - Hover', () => {
  			// cy.on('window:alert', cy.stub().as('alert'))
			cy.get('.tooltiptext')
				  .should('not.be.visible')

			// Simulate mouse hover on the hyperlink text
			// cy.get('.tooltip').invoke('show').click().then(() => {
			cy.get('.tooltip').trigger('mouseover').then(() => {
				cy.get('.tooltiptext').should('be.visible')
			});
		});
	});
});



