/// <reference types="cypress" />

describe('Signin', () => {
    it('passes', () => {
        // Visiting the Sigin page
      cy.visit('http://10.164.2.197:3001/app/login')

    //   Assertion to check if we landed on the desired page
   cy.get('h2').contains('Login to your account').should('be.visible') 

    // Entering the email 
    cy.get('input[placeholder="Enter Email Address"] ').type('shahwaizhassan9@gmail.com')

    // Entering the password
    cy.get('input[placeholder="Password').type('White@frost99')

    // Clicking the Signin button
    cy.contains('button','Sign In').should('be.visible').click()

    // Assertion to check if we landed on the dashboard
    cy.get("h3").contains('My Chatbots').should('be.visible')
    // Opening side bar
    cy.get('.ant-layout-sider-zero-width-trigger').click()

    // assertion to check if sidebar opened
    cy.get('span').contains('My Account').should('be.visible')




      
    })
  })