// <reference types="cypress" />

describe('MyChatbots', () => {
    beforeEach(() => {
        cy.login();
    });
    it('passes', () => {
        // Get in Chatbot Sections
        cy.get('span').contains('My Chatbots').should('be.visible').click()
   
        // Assertion to check if landed on chatbots section
        cy.get('h3').contains('My Chatbots').should('be.visible')

        // Checking if a chatbot exists
        cy.get('.ant-card-body').should('be.visible')
        cy.get('.ant-card-meta-title').invoke('text').as('storedText');


        // Deleting the chatbot
        cy.get('.ant-card-meta-avatar').first().children().trigger('mouseenterr').wait(500).get('[data-icon="delete"]').first().click({force:true})
         cy.get('button').contains('span','Yes').click()

                  
    })
})