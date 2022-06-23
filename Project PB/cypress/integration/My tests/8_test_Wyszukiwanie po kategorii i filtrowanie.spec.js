/// <reference types="cypress" />
import CookiesOlx from '../../PageObject/CookiesOlx'
const olx = new CookiesOlx
context('Przejście do olx i wyszukanie frazy dla Białegostoku ', () => {
  describe('Test 8', () => {
    it('Przejście na strone + timeout', () => {
      cy.visit('www.olx.pl');
      cy.url().should('contain', 'www.olx.pl');
      cy.get('a', { timeout: 10000 })
    })
    it('Akceptacja ciastek', () => {
      olx.getCookiesButtonOlx().click().should('not.be.visible');
    })

    it("Wybór kategorii - Rowery", () => {
      Cypress.on('uncaught:exception', (err, runnable) => {
        return false
      });
      cy.get('#searchmain-container > div > div > div:nth-child(12) > div:nth-child(2) > div > a > span:nth-child(1)').click();
      cy.get('#bottom767 > ul > li:nth-child(8) > a > span > span').click();
      cy.get('[data-testid="listing-grid"]').should("contain", 'rower');
    });
    it('Akceptacja ciastek', () => {
      olx.getCookiesButtonOlx().click().should('not.be.visible');
    });
    it("Wybór kategorii - Rower miejski", () => {
      cy.get('#root > div > div > form > div:nth-child(3) > div > ul > li:nth-child(5) > a').click();
    });
    it('Akceptacja ciastek', () => {
      olx.getCookiesButtonOlx().click().should('not.be.visible');
    });
    it("Wybór filtra - Stan używany", () => {
      cy.get('#root > div > div> form > div:nth-child(3) > div > div > div > div > div > div:nth-child(1) > div > span').click();
      cy.get('#root > div > div > form > div:nth-child(3) > div > div > div > div > div > div > div > div:nth-child(2) > label > input[type=checkbox]').click();
      cy.url().should("contain", 'd/sport-hobby/rowery/rowery-miejskie/?search%5Bfilter_enum_state%5D%5B0%5D=used')
    })
  })
})