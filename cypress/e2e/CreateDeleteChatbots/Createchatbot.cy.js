/// <reference types="cypress" />
import 'cypress-file-upload';

describe('MyChatbots', () => {
    beforeEach(() => {
        cy.login();
    });
    it('passes', () => {
        // Get in Chatbot Sections
        cy.get('span').contains('My Chatbots').should('be.visible').click()
   
        // Assertion to check if landed on chatbots section
        cy.get('h2').contains('Start building your Chatbot').should('be.visible')

        // Uploading a file
        cy.get('p').contains('Click or drag file to this area to upload').parent().click()       
        const filePath = "demo.docx"; // The file must be in cypress/fixtures/
        cy.get('input[type="file"]').attachFile(filePath);

        // Assertion to check if file uploaded
        cy.get('div').contains('Character count').should('be.visible')

        // Clicking the Create button
        cy.contains('button', 'Create').should('be.visible').click()

        // Assertion to check if chatbot created
        cy.get('h2').contains('Add bot to your site').should('be.visible')

            
    })
})