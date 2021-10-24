/// <reference types="cypress" />

describe('orquesta de pruebas para el home', () => {

  // beforeEach(() => {
  //   cy.visit("http://localhost:3000/")
  // })


  // it('bateria de test slider', () => {
  //   cy.visit("http://localhost:3000/")
  //   cy.get('p').should('have.text', 'Lorem ipsum dolor sit.');
  // })

  describe('My Component', () => {
    it('should respond to click on button with warning', () => {
      cy.visit('http://localhost:6006/iframe.html?id=components-button--red');
      cy.get('button').contains('Press Me')
      cy.get('button').should('have.text', 'Press Me');
    });
  })

  // context('TEXT', () => {
  //   it('TEXTO EN EL HOME', () => {
  //     cy.visit("http://localhost:3000/")

  //     // add E2E test commands here
  //     cy.get('img').should('be.visible');
  //     cy.get('a').should('have.text', 'Learn React');
  //     // .debug();
  //     cy.get('.App-link').should('be.visible');
  //     cy.get('.App-link').click();
  //     cy.url().should('include', '/new-window');
  //   })
  
  //   // context('E2E', () => {
  //   //   it('tests the application', () => {
  //   //     cy.visit("http://localhost:3000/")
  //   //     cy.wrap(true).should('equal', true)
  //   //   })
    
  //   // })
  // })
})




