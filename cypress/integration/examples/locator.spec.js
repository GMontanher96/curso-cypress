/// <reference types="cypress" />

describe('Cypress basics', () => {
    it('should visit a page and assert title', () => {
        cy.visit('https://wcaquino.me/cypress/componentes.html')
    })
    
    beforeEach(() => {
        cy.reload()
    })

    it('...', () => {
        
    })
})