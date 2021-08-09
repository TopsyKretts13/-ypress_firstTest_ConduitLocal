/// <reference types="cypress" />

describe('', () => {
    before('', () => {
        //cy.visit('https://react-redux.realworld.io/#/login')
        cy.visit('http://localhost:1667/#/login')
    });

    it('', () => {
        //cy.get(':nth-child(1) > .form-control').type('topsykretts13@gmail.com');
        //cy.get(':nth-child(2) > .form-control').type('Fvgbhnj1');
        cy.get(':nth-child(1) > .form-control').type('123@gmail.com');
        cy.get(':nth-child(2) > .form-control').type('Fvgbhnj1');
        cy.get('.btn').click();

        cy.get('.navbar').contains('Topsy Kretts').should('exist');
    });
});