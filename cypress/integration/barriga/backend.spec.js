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


  it("Should update an account", () => {});
});
