/// <reference types="cypress" />
import 'cypress-file-upload';

describe('MyChatbots', () => {
    beforeEach(() => {
        cy.login();
    });
    it('passes', () => {
        // Get in Chatbot Sections
        cy.get('span').contains('My Chatbots').should('be.visible').click()
        
        // select chatbot
        cy.get('.ant-card-meta-avatar').first().children().click({force:true})
        
        // select histroy
        cy.get('span').contains('Chat History').should('be.visible').click()
      
        // Asseertion to check if landed on correct page
        cy.get('h2').contains('Chat History').should('be.visible')

        // select chat history
        cy.get(':nth-child(1) > .ant-list-item-meta').click()
            
    })
})