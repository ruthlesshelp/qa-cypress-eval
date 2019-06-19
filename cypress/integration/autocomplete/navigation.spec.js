// const AUTOCOMPLETE_URL = '/autocomplete/'

describe('Tabs and Navigation', () => {
	beforeEach(() => {
		cy.visit(Cypress.config().baseUrl)

		.then(() => {

			// Check the side bar, top menu and footer are always visible
			cy.get('#sidebar').should('be.visible')
			cy.get('#menu-top').should('be.visible')
			cy.get('footer').should('be.visible')

			// Check the side bar titles are correct
			cy.get('#sidebar').should('contain','Interactions')
			cy.get('#sidebar').should('contain','Widgets')
		})
	});

	afterEach(() => {
	});

	describe('Navigate Tabs From Top Menu', () => {
		it('Access Home Tab and expect Home title displayed', () => {
			// Go to Home tab from the top menu
			cy.get('#menu-top .menu-item').eq(0).click()

			// Check the page body section should display Home
			.then(() => {
				cy.get('.entry-title')
				  .should('contain', 'Home')

				cy.get('.entry-title')
				  .should('be.visible')
			})
		});

		it('Access Widgets Tab and expect Widgets title and list displayed', () => {
			// Go to Widgets tab from the top menu
			cy.get('#menu-top .menu-item').eq(2).click()

			.then(() => {
				// Check the page body section should display Widgets
				cy.get('.entry-title')
				  .should('contain', 'Widgets')

				cy.get('#content .entry-title')
				  .should('be.visible')

				// Check one of the known Widgets list component
				cy.get('#content .demo-frame li').eq(0)
				  .should('contain', 'Tooltip and Double click').should('be.visible')

				// Check the count of Widgets list components
				cy.get('#content .demo-frame li')
				  .should('have.length', 15)
			})
		});

		it('Access Interactions Tab and expect Interactions title and list displayed', () => {
			cy.get('#menu-top .menu-item').eq(1).click()

			.then(() => {
				// Check the page body section should display Interactions
				cy.get('.entry-title')
				  .should('contain', 'Interactions')

				cy.get('#content .entry-title')
				  .should('be.visible')

				// Check one of the known Interactions list component
				cy.get('#content .demo-frame li').eq(3)
				  .should('contain', 'Droppable').should('be.visible')

				// Check the count of Interactions list components
				cy.get('#content .demo-frame li')
				  .should('have.length', 5)

			})
		});
	});

	describe('Navigate Tabs From Sidebar', () => {
		it('Access Widgets Tab from the Sidebar', () => {
			// Click on Widgets -> Tabs from the sidebar
			cy.get('#sidebar .widget').eq(1).find(' li').eq(2).click()

			.then(() => {
				cy.get('.entry-title')
				  .should('contain', 'Tabs')

				cy.get('.entry-title')
				  .should('be.visible')
			})
		});

		it('Access Widgets Tab from the Sidebar', () => {
			// Click on Interactions -> Resizable from the sidebar
			cy.get('#sidebar .widget').eq(0).find(' li').eq(2).click()

			.then(() => {
				cy.get('.entry-title')
				  .should('contain', 'Resizable')

				cy.get('.entry-title')
				  .should('be.visible')
			})
		});
	});
})
