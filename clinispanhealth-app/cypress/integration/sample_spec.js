describe('Banner Functionality', function () {
    it('Opens web app, clicks on CSH logo, and visits Home page', function () {
        cy.visit('https://clinispanhealth523.herokuapp.com/')

        // Visit Home page
        cy.get('.cshHeader').click()
        cy.url().should('include', '/home')

        // Visit Studies For You page
        cy.contains('Studies For You').click()
        cy.url().should('include', '/studies-for-you')

        // Visit Browse Studies page
        cy.contains('Browse Studies').click()
        cy.url().should('include', '/browse-studies')

        // Visit Manage Profile page
        cy.contains('Manage Profile').click()
        cy.url().should('include', '/manage-profile')

        // Visit FAQ page
        cy.contains('FAQ').click()
        cy.url().should('include', '/faq')

        // Arrange - setup initial app state
        // - visit a web page
        // - query for an element
        // Act - take an action
        // - interact with that element
        // Assert - make an assertion
        // - make an assertion about page content
    })
})