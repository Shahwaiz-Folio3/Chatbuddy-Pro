/// <reference types="cypress" />
import 'cypress-file-upload';

describe('Smoke Test - MyChatbots', () => {
    beforeEach(() => {
        cy.login(); // Ensure user is logged in
    });

    it('should pass the smoke test for chatbot functionality', () => {
        // Navigate to My Chatbots section
        cy.get('span').contains('My Chatbots').should('be.visible').click();
        cy.get('h2').contains('Start building your Chatbot').should('be.visible');

        // Upload a chatbot file
        cy.get('p').contains('Click or drag file to this area to upload').parent().click();
        cy.get('input[type="file"]').attachFile("demo.docx");

        // Confirm file upload
        cy.get('div').contains('Character count').should('be.visible');

        // Click Create button
        cy.contains('button', 'Create').should('be.visible').click();

        // Verify chatbot creation
        cy.get('h2').contains('Add bot to your site').should('be.visible');

        // Get in Chatbot Sections
        cy.get('span').contains('My Chatbots').should('be.visible').click()
        
        // select chatbot
        cy.get('.ant-card-meta-avatar').first().children().click({force:true})
        
      
        // select field to enter message
        cy.get('div[data-placeholder="Type your message..."] ').type('Hello').type('{enter}')

         // select histroy
         cy.get('span').contains('Chat History').should('be.visible').click()
      
         // Asseertion to check if landed on correct page
         cy.get('h2').contains('Chat History').should('be.visible')
 
         // select chat history
         cy.get(':nth-child(1) > .ant-list-item-meta').click()

         // Get in Chatbot Sections
        cy.get('span').contains('My Account').should('be.visible').click()
   
        // Assertion to check if landed on chatbots section
        cy.get('h1').contains('My Account').should('be.visible')

        //Entering data in fields
        cy.get('#basic_firstName').clear().type('Shahwaiz')
        cy.get('#basic_lastName').clear().type('Hassan')
        cy.get('#basic_email').clear().type('shahwaizhassan9@gmail.com')
        cy.get('input[placeholder="Password"]').type('White@frost99')
        cy.get('button').contains('Update Profile').click()

        // Assertion to check if profile updated
        cy.get('.ant-message-notice-content').should('be.visible')

         // Get in Chatbot Sections
         cy.get('span').contains('Logout').should('be.visible').click()
    });
});
