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
        cy.get('span').contains('Widget Settings').should('be.visible').click()
      
        // Asseertion to check if landed on correct page
        cy.get('h1').contains('Widget Settings').should('be.visible')

        // changing info
        cy.get('.ant-btn-icon').click()
        
        cy.get('input[placeholder="Enter your chatbot name here"] ').type('testbot')
        cy.get(':nth-child(4) > .ant-form-item > .ant-row > .ant-form-item-control > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-switch > .ant-switch-inner').click()
        cy.get(':nth-child(5) > .ant-form-item > .ant-row > .ant-form-item-control > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-switch > .ant-switch-inner').click()
        cy.get(':nth-child(6) > .ant-form-item > .ant-row > .ant-form-item-control > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-switch > .ant-switch-inner').click()
        
            // Step 1: Click on the color picker input to open the palette
            cy.get('.ant-color-picker-trigger').first().click();

        
        // save
        cy.get('button').contains('Save').click()
        
    })
})











