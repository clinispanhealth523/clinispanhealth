describe('My First Test', function () {
    it('Opens web app, clicks on CSH logo, and visits Home Page', function () {
        cy.visit('https://clinispanhealth523.herokuapp.com/')

        cy.get('.cshHeader').click()

        cy.url().should('include', '/home')
        // Arrange - setup initial app state
        // - visit a web page
        // - query for an element
        // Act - take an action
        // - interact with that element
        // Assert - make an assertion
        // - make an assertion about page content
    })
})