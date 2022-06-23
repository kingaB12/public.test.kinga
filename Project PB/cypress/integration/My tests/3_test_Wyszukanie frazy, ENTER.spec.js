/// <reference types="cypress" />
import CookiesOlx from '../../PageObject/CookiesOlx'
const olx = new CookiesOlx
context('Przejście do olx i wyszukanie frazy + ENTER', () => {
    describe('Test 3', () => {
        it('Przejście na strone + timeout', () => {
            cy.visit('www.olx.pl');
            cy.url().should('contain', 'www.olx.pl');
            cy.get('a', { timeout: 20000 })
        })
        it('Akceptacja ciastek', () => {
            olx.getCookiesButtonOlx().click().should('not.be.visible');
        })

        it('Dodanie inputu, szukanie frazy i asercja + ENTER', () => {
            Cypress.on('uncaught:exception', (err, runnable) => {
                return false
            });
            cy.get('[data-cy="homepage_input_textsearch"]').type('rower{enter}');
            olx.getCookiesButtonOlx().click().should('not.be.visible');
            cy.get('[data-testid="listing-grid"]').should("contain", 'rower');
        })
    })
})