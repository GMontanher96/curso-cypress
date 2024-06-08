/// <reference types="cypress" />

const { reject, resolve } = require("bluebird")

describe('Helpers...', () => {
    it('Wrap', () => {
        const obj = {nome: 'User', idade: 20}
        expect(obj).to.have.property('nome')
        cy.wrap(obj).should('have.property', 'nome')

      cy.visit('https://wcaquino.me/cypress/componentes.html')
       // cy.get('#formNome').then($el => {
         //   cy.wrap($el).type('funciona via cypress')
        //})

        const promise = new Promise((resove, reject) => {
            setTimeout(() => {
                resolve(10)
            }, 500)
        })
        
        cy.get('#buttonSimple').then(() => console.log('Encontrei o primeiro botão'))
        cy.wrap(promise).then(ret => console.log(ret))
        cy.get('#buttonList').then(() => console.log('Encontrei o segundo botão'))

    })
})