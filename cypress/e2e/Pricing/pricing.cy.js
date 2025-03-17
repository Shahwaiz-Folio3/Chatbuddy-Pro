// <reference types="cypress" />

describe('MyProfile', () => {
    beforeEach(() => {
        cy.login();
    });
    it('passes', () => {
        // Get in Chatbot Sections
        cy.get('span').contains('Pricing').should('be.visible').click()
   
        // Assertion to check if landed on chatbots section
        cy.get('h1').contains('Pricing Plans').should('be.visible')

        // 
        cy.get('div').contains('Yearly').click()

                  
    })
})