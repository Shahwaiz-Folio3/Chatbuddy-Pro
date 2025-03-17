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
        
      
        // select field to enter message
        cy.get('div[data-placeholder="Type your message..."] ').type('Hello').type('{enter}')
            
    })
})