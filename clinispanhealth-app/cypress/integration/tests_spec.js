describe('Frontend tests', function () {
    beforeEach(() => {
        // Cypress starts out with a blank slate for each test
        // so we must tell it to visit our website with the `cy.visit()` command.
        // Since we want to visit the same URL at the start of all our tests,
        // we include it in our beforeEach function so that it runs before each test

        // CSH app must be running locally before calling "npx cypress open" in a separate terminal
        cy.visit('localhost:3000')
      })
    it('Visits all pages from the navbar', function () {
        Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
            return false
        })
        // Visit Home page
        cy.get('.cshHeader').click()
        cy.url().should('include', '/home')

        // // Visit Studies For You page
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

    it('Populates sign up fields and checks value', function () {

        cy.get('input[type=text').eq(0).type('joeschmoe27@yahoo.com')
        .should('have.value', 'joeschmoe27@yahoo.com')

        cy.get('input[type=text').eq(1).type('password123')
        .should('have.value', 'password123')

        cy.get('input[type=text').eq(2).type('password123')
        .should('have.value', 'password123')

        cy.get('input[type=text').eq(3).type('27516')
        .should('have.value', '27516')

        cy.get('input[type=text').eq(4).type('1-919-874-3001')
        .should('have.value', '1-919-874-3001')

    })

    it('Populates log in fields and checks value', function () {

        cy.contains('Login').click()

        cy.get('input[type=text').eq(0).type('joeschmoe27@yahoo.com')
        .should('have.value', 'joeschmoe27@yahoo.com')

        cy.get('input[type=password').type('password123')
        .should('have.value', 'password123')
    })

    it('Populates Manage Profile fields and checks value', function () {
        Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
            return false
        })
        cy.get('.cshHeader').click()
        cy.contains('Manage Profile').click()

        cy.get('input[type=text').eq(0).type('Joe')
        .should('have.value', 'Joe')

        cy.get('input[type=text').eq(1).type('Schmo')
        .should('have.value', 'Schmo')

        cy.get('input[type=text').eq(2).type('03/27/1965')
        .should('have.value', '03/27/1965')

        cy.get('input[type=text').eq(3).type('Chapel Hill')
        .should('have.value', 'Chapel Hill')

        cy.get('input[type=text').eq(4).type('Joe Schmo')
        .should('have.value', 'Joe Schmo')

        cy.get('input[type=text').eq(5).type('joeschmoe27@yahoo.com')
        .should('have.value', 'joeschmoe27@yahoo.com')

        cy.get('input[type=text').eq(6).type('1-919-874-3001')
        .should('have.value', '1-919-874-3001')

        cy.get('input[type=text').eq(8).type('Male')
        .should('have.value', 'Male')

        cy.get('#medsTextArea').type('Zoloft, Hygroton, Adderall')
        .should('have.value', 'Zoloft, Hygroton, Adderall')

        cy.get('input[type=checkbox').eq(7).check()
        .should('be.checked')

        cy.get('input[type=checkbox').eq(10).check()
        .should('be.checked')

        cy.get('input[type=checkbox').eq(14).check()
        .should('be.checked')

    })

    it('Visits Browse Studies page and searches for studies', function () {

        cy.contains('BROWSE STUDIES').click()

        cy.get('.search').type("COVID-19")

        // Simulate mouseover event
        cy.get('.trialBox').eq(0).trigger('mouseover')
        cy.get('.trialBox').eq(0).should('have.css', 'border-color', 'rgb(5, 158, 197)')
    })

    it ('Visits Home page and clicks on Facebook button', function () {

        cy.get('.cshHeader').click()

        cy.get('#FbBtn').click()
        
    })

    it ('Visits FAQ page and clicks on dropdowns', function () {
        
        cy.get('.cshHeader').click()
        cy.contains('FAQ').click()

        // open and close dropdown
        cy.get('#1').click()
        cy.get('#14').click()
    })
})