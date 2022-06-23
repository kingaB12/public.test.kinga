/// <reference types="cypress" />
import CookiesOlx from '../../PageObject/CookiesOlx'
const olx = new CookiesOlx
context('Przejście do olx', () => {
   describe('Test 10', () => {
      it('Przejście na strone + timeout', () => {
         cy.visit('www.olx.pl');
         cy.url().should('contain', 'www.olx.pl');
         cy.get('a', { timeout: 20000 })
      })
      it('Akceptacja ciastek', () => {
         olx.getCookiesButtonOlx().click().should('not.be.visible');
      })
      it('Przejście do wyróżnione ogłoszenia', () => {
         cy.get('#lastwrapper > div > div > div > div > div:nth-child(1) > ul > li:nth-child(3) > a > span').click();
         cy.url().should("contain", 'pakiety-promowan');
      })
      it('Akceptacja ciastek', () => {
         olx.getCookiesButtonOlx().click().should('not.be.visible');
      })
      it('Powrót na strone główną', () => {
         cy.get('#headerLogo').click();
         cy.url().should("contain", 'https://www.olx.pl/');
      })
   })
})