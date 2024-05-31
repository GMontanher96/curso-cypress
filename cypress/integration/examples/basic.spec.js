/// <reference types="cypress" />

describe('Cypress basics', () => {
    it('should visit a page and assert title', () => {
        cy.visit('https://wcaquino.me/cypress/componentes.html')

        cy.pause() // executa o passo a passo 

        cy.title().should('to.equal', 'Campo de Treinamento')
        cy.title().debug().should('contain', 'Campo')


        cy.title()
            .should('be.equal', 'Campo de Treinamento')
            .and('contain', 'Campo')
    })

    it('Should find and interact with and element', () => {
        cy.visit('https://wcaquino.me/cypress/componentes.html')

       //  cy.get('nao existe')
       cy.get('#buttonSimple')
            .click()
           .should('#buttonSimple', 'Obrigado')
   
    })
})