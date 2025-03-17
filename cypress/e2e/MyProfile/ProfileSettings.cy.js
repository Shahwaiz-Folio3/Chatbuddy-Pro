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

        //Entering data in fields
        cy.get('#basic_firstName').clear().type('Shahwaiz')
        cy.get('#basic_lastName').clear().type('Hassan')
        cy.get('#basic_email').clear().type('shahwaizhassan9@gmail.com')
        cy.get('input[placeholder="Password"]').type('White@frost99')
        cy.get('button').contains('Update Profile').click()

        // Assertion to check if profile updated
        cy.get('.ant-message-notice-content').should('be.visible')
        

                  
    })
})