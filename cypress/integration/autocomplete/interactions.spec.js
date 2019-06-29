// const AUTOCOMPLETE_URL = '/autocomplete/'

describe('Interactions tab', () => {
	before(() => {
		cy.visit(Cypress.config().baseUrl)

		.then(() => {

			// Go to 'Interactions' tab from the top menu
			cy.get('#menu-top .menu-item').eq(1).click()

			.then(() => {
				// Check the page body section should display 'Interactions'
				cy.get('.entry-title')
				  .should('contain', 'Interactions')

				cy.get('#content .entry-title')
				  .should('be.visible')

				// Check one of the known 'Interactions' list component
				cy.get('#content .demo-frame li').eq(1)
				  .should('contain', 'Selectable').should('be.visible')
			});
		});
	});

	afterEach(() => {
	});

	describe('Test each UI element', () => {
		describe('Test 2nd Component - Selectable', () => {
			it('Select one element', () => {

				// Navigate to Selectable tab
				cy.get('#content .demo-frame li a').eq(1).click()
				cy.get('.entry-title').should('contain', 'Selectable')

				// Click on 'Item 5'
				cy.get('#selectable li').eq(4).click()
				// 'Item 5' should be selected
				cy.get('#selectable li').eq(4).should('have.class', 'ui-selected')
			});

			it('Select another item', () => {

				// Click away from Item 5', and click on 'Item 3'
				cy.get('#selectable li').eq(2).click()
				// 'Item 5' should not remain selected anymore
				cy.get('#selectable li').eq(4).should('not.have.class', 'ui-selected')
				// Whereas 'Item 3' should be selected
				cy.get('#selectable li').eq(2).should('have.class', 'ui-selected')
			});

			it('Select the same item, and item remain selected', () => {

				// Click on 'Item 3' again to try to unselect it
				cy.get('#selectable li').eq(2).click()
				// 'Item 3' should remain selected unless unselection feature is implemented
				cy.get('#selectable li').eq(2).should('have.class', 'ui-selected')
			});
		});

		describe('Test 5th Component - Draggable', () => {
			before(() => {
				cy.visit(Cypress.config().baseUrl)

				.then(() => {
					// Go to 'Interactions' tab from the top menu
					cy.get('#menu-top .menu-item').eq(1).click()
					cy.get('#content .demo-frame li a').eq(4).click()
						  .should('contain', 'Draggable').should('be.visible')
					});
				});

			it('Drag the element', () => {
				// Drag the element
 				cy.get('#draggable')
	 				.trigger('mousedown', { which: 1, pageX: 600, pageY: 100 })
					.trigger('mousemove', { which: 1, pageX: 660, pageY: 20 })
					.trigger('mouseup')

				// After the movement, the X-cordinate should be +60px, and Y-cordinate should be -80px
				cy.get('#draggable').should('have.attr', 'style', 'position: relative; left: 60px; top: -80px;');
			});
		});
	});
});