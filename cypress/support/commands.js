// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add("login", () => {
    // Visiting the Signin page
    cy.visit("http://10.164.2.197:3001/app/login");
  
    // Assertion to check if we landed on the desired page
    cy.get("h2").contains("Login to your account").should("be.visible");
  
    // Entering the email 
    cy.get('input[placeholder="Enter Email Address"]').type("shahwaizhassan9@gmail.com");
  
    // Entering the password (Fixed the missing `]` in selector)
    cy.get('input[placeholder="Password"]').type("White@frost99");
  
    // Clicking the Sign-in button
    cy.contains("button", "Sign In").should("be.visible").click();
  
    // Assertion to check if we landed on the dashboard
    cy.get("h3").contains("My Chatbots").should("be.visible");
  
    // Opening the sidebar
    cy.get(".ant-layout-sider-zero-width-trigger").click();
  
    // Assertion to check if sidebar opened
    cy.get("span").contains("My Account").should("be.visible");
  });
  


  
Cypress.Commands.add("login", () => {
  // Visiting the Signin page
  cy.visit("http://10.164.2.197:3001/app/login");

  // Assertion to check if we landed on the desired page
  cy.get("h2").contains("Login to your account").should("be.visible");

  // Entering the email 
  cy.get('input[placeholder="Enter Email Address"]').type("shahwaizhassan9@gmail.com");

  // Entering the password (Fixed the missing `]` in selector)
  cy.get('input[placeholder="Password"]').type("White@frost99");

  // Clicking the Sign-in button
  cy.contains("button", "Sign In").should("be.visible").click();

  // Assertion to check if we landed on the dashboard
  cy.get("h3").contains("My Chatbots").should("be.visible");

  // Opening the sidebar
  cy.get(".ant-layout-sider-zero-width-trigger").click();

  // Assertion to check if sidebar opened
  cy.get("span").contains("My Account").should("be.visible");
});
