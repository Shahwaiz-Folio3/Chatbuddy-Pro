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
        cy.get('span').contains('Access Control').should('be.visible').click()
      
        // Asseertion to check if landed on correct page
        cy.get('h2').contains('Access Control').should('be.visible')

        // changing info
        cy.get(':nth-child(2) > .ant-radio-wrapper > .ant-radio > .ant-radio-inner').click()
        
        
        // save
        cy.get('button').contains('Save').click()
        
    })
})











