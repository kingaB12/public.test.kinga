/// <reference types="cypress" />
import CookiesOlx from '../../PageObject/CookiesOlx'
const olx = new CookiesOlx
context('Przejście do olx i wyszukanie frazy + SZUKAJ', () => {
    describe('Test 4', () => {
        it('Przejście na strone + timeout', () => {
            cy.visit('www.olx.pl');
            cy.url().should('contain', 'www.olx.pl');
            cy.get('a', { timeout: 10000 })
        })
        it('Akceptacja ciastek', () => {
            olx.getCookiesButtonOlx().click().should('not.be.visible');
        })

        it('Dodanie inputu, szukanie frazy i asercja + SZUKAJ', () => {
            Cypress.on('uncaught:exception', (err, runnable) => {
                return false
            });
            cy.get('[data-cy="homepage_input_textsearch"]').type('rower');
            cy.get('#submit-searchmain').eq(0).click();
            cy.url().should("contain", 'rower');
        })
    })
})