/// <reference types="cypress" />

describe('Work with basic elements', () => {
    it('Text', () => {
cy.visit('https://wcaquino.me/cypress/componentes.html')        
cy.get('body').should('contain', 'cuidado')
    })
})