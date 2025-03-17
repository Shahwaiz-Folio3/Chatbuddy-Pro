// <reference types="cypress" />

describe('MyProfile', () => {
    beforeEach(() => {
        cy.login();
    });
    it('passes', () => {
        // Get in Chatbot Sections
        cy.get('span').contains('My Account').should('be.visible').click()
   
        // Assertion to check if landed on chatbots section
        cy.get('h1').contains('My Account').should('be.visible')

        // selecting button
        cy.get('button').contains('Manage Subscription').click()
                  
    })
})