/// <reference types="cypress" />

describe("Should test at a functional level", () => {

    let token 
    
    before(() => {
    cy.getToken('a@a', 'a')
        .then(tkn => {
            token =  tkn
        })
  });

  beforeEach(() => {
    cy.resetRest(token)
  });

  it("Incluindo Conta", () => {
      cy.request({
        url: "/contas",
        method: "POST",
        headers: { Authorization: `JWT ${token}`},
        body: {
        nome: 'Conta viaa rest'
        },
      }).as("response");

    cy.get("@response").then(res => {
      expect(res.status).to.be.equal(201);
      expect(res.body).to.have.property('id');
      expect(res.body).to.have.property('nome', 'Conta viaa rest');
    });
  });

  it.only("Should update an account", () => {
cy.request({
  method: 'GET',
  url: '/contas',
  headers: { Authorization: `JWT ${token}`},
  qs: {
    nome: 'Conta para movimentacoes'
  }
}).then(res => console.log(res))

    /////cy.request({
///url: 'https://barrigarest.wcaquino.me/contas/2168522',
   //   method: 'PUT',
   //   headers: { Authorization: `JWT ${token}`},
   ///   body: {
  //      nome: 'conta alterada via rest'
 //     }
 //   }).as('response')

 //   cy.get('@response').its('status').should('be.equal', 200)
  });

});
