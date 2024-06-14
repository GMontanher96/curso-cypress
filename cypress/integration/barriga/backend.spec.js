/// <reference types="cypress" />

describe('Should test at a functional level', () => {
    before(() => {

    })

    beforeEach(() => {

    })

    it('Should create an account', () => {
        cy.request({
            method: 'POST',
            url: 'https://barrigarest.wcaquino.me/signin',
            body: {
                email: "a@a",
                redirecionar: false,
                senha: "a"
            }
        })
    })

it('Should update an account', () => {

})


})