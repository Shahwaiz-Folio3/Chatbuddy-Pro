// <reference types="cypress" />

describe('MyProfile', () => {
    beforeEach(() => {
        cy.login();
    });
    it('passes', () => {
        // Get in Chatbot Sections
        cy.get('span').contains('Logout').should('be.visible').click()
 
       
        

                  
    })
})