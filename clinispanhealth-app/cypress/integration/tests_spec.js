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

        cy.get('input[type=text').eq(0).type('Dezbee')
        .should('have.value', 'Dezbee')

        cy.get('input[type=text').eq(1).type('McDaniel')
        .should('have.value', 'McDaniel')

        cy.get('input[type=text').eq(2).type('dezbeem123')
        .should('have.value', 'dezbeem123')

        cy.get('input[type=password').eq(0).type('password')
        .should('have.value', 'password')

        cy.get('input[type=password').eq(1).type('password')
        .should('have.value', 'password')

        cy.get('input[type=text').eq(3).type('27516')
        .should('have.value', '27516')

        cy.get('input[type=text').eq(4).type('1-704-532-9601')
        .should('have.value', '1-704-532-9601')

        cy.get('input[type=text').eq(5).type('562035')
        .should('have.value', '562035')

        cy.get('input[type=submit').eq(0).click()

    })

    it('Populates log in fields and checks value', function () {

        cy.contains('Login').click()

        cy.get('input[type=text').eq(0).type('dezbeem123')
        .should('have.value', 'dezbeem123')

        cy.get('input[type=password').type('password')
        .should('have.value', 'password')
    })

    it('Populates Manage Profile fields and checks value', function () {
        Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
            return false
        })
        cy.get('.cshHeader').click()
        cy.contains('Manage Profile').click()

        cy.get('input[type=text').eq(0).type('Dezbee')
        .should('have.value', 'Dezbee')

        cy.get('input[type=text').eq(1).type('McDaniel')
        .should('have.value', 'McDaniel')

        cy.get('input[type=text').eq(2).type('03/27/1990')
        .should('have.value', '03/27/1990')

        cy.get('input[type=text').eq(3).type('Chapel Hill')
        .should('have.value', 'Chapel Hill')

        cy.get('input[type=text').eq(4).type('Dezbee McDaniel')
        .should('have.value', 'Dezbee McDaniel')

        cy.get('input[type=text').eq(5).type('dezbeem123')
        .should('have.value', 'dezbeem123')

        cy.get('input[type=text').eq(6).type('1-704-532-9601')
        .should('have.value', '1-704-532-9601')

        cy.get('select[id=gender]').select('Male').should('have.value', 'Male')

        cy.get('select[id=ethnicity]').select('Black or African American').should('have.value', 'Black')

        cy.get('input[type=text').eq(7).type('Zoloft, Hygroton, Adderall')
        .should('have.value', 'Zoloft, Hygroton, Adderall')

        cy.get('input[type=checkbox').eq(7).check()
        .should('be.checked')

        cy.get('input[type=checkbox').eq(10).check()
        .should('be.checked')

        cy.get('input[type=checkbox').eq(14).check()
        .should('be.checked')

        cy.get('button[id=saveBtn]').click()

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

    it ('Enters blank fields for first and last name on Sign Up page', function () {

        // should throw an error
        cy.get('input[type=submit').eq(0).click()
    })

    it ('Includes numbers and symbols in name fields on Sign Up page', function () {

        // should throw an error
        cy.get('input[type=text').eq(0).type('123Dez56')

        cy.get('input[type=text').eq(1).type('#D%*')

        cy.get('input[type=submit').eq(0).click()
    })

    it ('Signs up with blank email', function () {

        // should throw an error
        cy.get('input[type=text').eq(0).type('Dezbee')

        cy.get('input[type=text').eq(1).type('McDaniel')

        cy.get('input[type=submit').eq(0).click()
    })
})