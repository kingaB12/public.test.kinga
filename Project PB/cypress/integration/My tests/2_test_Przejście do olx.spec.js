/// <reference types="cypress" />
import CookiesOlx from '../../PageObject/CookiesOlx'
const olx = new CookiesOlx
context('Przejście do olx', () => {
    describe('Test 2', () => {
        it('Przejście na strone + timeout', () => {
            cy.visit('www.olx.pl');
            cy.url().should('contain', 'www.olx.pl');
            cy.get('a', { timeout: 20000 })
        })
        it('Akceptacja ciastek', () => {
            olx.getCookiesButtonOlx().click().should('not.be.visible');
        })
    })
})