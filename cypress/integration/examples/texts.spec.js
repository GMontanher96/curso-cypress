/// <reference types="cypress" />

describe('Work with basic elements', () => {


    it('Text',() => {
        cy.visit('https://wcaquino.me/cypress/componentes.html')
        cy.get('body').should('contain', 'Cuidado')
        cy.get('span').should('contain', 'Cuidado')
        cy.get('.facilAchar').should('contain', 'Cuidado')
        cy.get('.facilAchar').should('have.text', 'Cuidado onde clica, muitas armadilhas')
    })

    it.only('Links', () => {
        cy.visit('https://wcaquino.me/cypress/componentes.html')
        cy.get("a").first().click()
        cy.get('#resultado').should('have.text', 'Voltou!')

        cy.reload()
        cy.get('#resultado').should('have.not.text', 'Voltou!')
        cy.contains('Voltar').click()
        cy.get('#resultado').should('have.text', 'Voltou!')
    })

    it.only('TextFields', () => {
        cy.visit('https://wcaquino.me/cypress/componentes.html')
        cy.get('#formNome').type('Cypress Test')
        cy.get('#formNome').should('have.value', 'Cypress Test')

        cy.get('[data-cy=dataSobrenome]')
            .type('teste12345(backspace){backspace}')
        

        cy.get('#elementosForm\\:sugestoes')
            .type('textarea')
            .should('have.value', 'textarea')

            cy.get('#tabelaUsuarios > :nth-child(2) > :nth-child(1) > :nth-child(6) > input')
            .type('????')
    })
    
})