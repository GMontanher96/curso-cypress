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

    it('TextFields', () => {
        cy.visit('https://wcaquino.me/cypress/componentes.html')
        cy.get('#formNome').type('Cypress Test')
        cy.get('#formNome').should('have.value', 'Cypress Test')

        cy.get('[data-cy=dataSobrenome]')
            .type('teste12345(backspace){backspace}')
        

        cy.get('#elementosForm\\:sugestoes')
        .clear()
            .type('Error{selectall}acerto', {delay:100})
            .should('have.value', 'acerto')
    })

    it('RadioButton', () => {
        cy.get('#formSexoFem')
        .click()
        .should('be.checked')

        cy.get('#formSexoMasc').should('not.be.checked')

        cy.get("[name='formSexo']").should('have.length', 2)
    })

    it.only('Checkbox', () => {
        cy.visit('https://wcaquino.me/cypress/componentes.html')
        cy.get('#formComidaPizza')
        .click()
        .should('be.checked')

        cy.get('[name=formComidaFavorita]').click({ multiple: true })
        cy.get('#formComidaPizza').should('not.be.checked')
        cy.get('#formComidaVegetariana').should('be.checked')
    })

    it.only('Combo', () => {
        cy.visit('https://wcaquino.me/cypress/componentes.html')
        cy.get('[data-test=dataEscolaridade]')
        .select('2o grau completo')
        .should('have.value', '2o grau completo')

        cy.get('[data-test=dataEscolaridade]')
        .select('1graucomp')
        .should('have.value', '1graucomp')
        //TODO validar as opções do combo

    })

    it.only('Combo multiplo', () => {
        cy.visit('https://wcaquino.me/cypress/componentes.html')
        cy.get('[data-testid=dataEsportes]')
        .select(['natação', 'Corrida', 'nada'])

        //TODO validar opç~oes selecionaas do combo muiltiplo
    })

    
})