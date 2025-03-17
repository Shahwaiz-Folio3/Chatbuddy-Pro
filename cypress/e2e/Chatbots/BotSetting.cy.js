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
        cy.get('span').contains('Bot Settings').should('be.visible').click()
      
        // Asseertion to check if landed on correct page
        cy.get('h3').contains('General').should('be.visible')

        // enter info
        cy.get('#chatbotName').type('Test Chatbot')
        cy.get('#basePrompt').type('here is the following pieces of information from a single or multiple documents as context. Your task is to answer the user/customer questions within the provided context. Your responses should strictly rely on the context provided below. Do not reply to any question outside the information provided in the context below.')
        cy.get('.ant-slider-handle') // Select the slider handle
  .focus() // Ensure it's focused
  .type('{rightarrow}'); // Move right by 1 step

        // save
        cy.get('button').contains('Save').click()
      
    })
})