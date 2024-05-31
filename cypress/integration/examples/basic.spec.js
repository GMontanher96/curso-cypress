/// <reference types="cypress" />

describe('Cypress basics', () => {
    it('should visit a page and assert title', () => {
        cy.visit('https://wcaquino.me/cypress/componentes.html')

        cy.title().should('to.equal', 'Campo de Treinamento')
    })

    it('Should find and interact with and element', () => {
        cy.visit('https://wcaquino.me/cypress/componentes.html')

       //  cy.get('nao existe')
       cy.get('#buttonSimple')
            .click()
           .should('#buttonSimple', 'Obrigado')
   
    })
})