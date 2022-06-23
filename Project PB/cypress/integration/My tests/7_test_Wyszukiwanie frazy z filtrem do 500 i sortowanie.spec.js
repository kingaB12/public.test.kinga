/// <reference types="cypress" />
import CookiesOlx from '../../PageObject/CookiesOlx'
const olx = new CookiesOlx
context('Przejście do olx i wyszukanie frazy dla Białegostoku ', () => {
  describe('Test 7', () => {
    it('Przejście na strone + timeout', () => {
      cy.visit('www.olx.pl');
      cy.url().should('contain', 'www.olx.pl');
      cy.get('a', { timeout: 10000 })
    })
    it('Akceptacja ciastek', () => {
      olx.getCookiesButtonOlx().click().should('not.be.visible');
    })

    it("Szukanie frazy dla Białegostoku i asercja", () => {
      Cypress.on('uncaught:exception', (err, runnable) => {
        return false
      });
      cy.get('[data-cy="homepage_input_textsearch"]').type('rower');
      cy.get('[data-cy="homepage_input_locationsearch"]').type('Białystok').wait(1000);
      cy.get('[data-cy="homepage_link_autosuggest"] > :nth-child(1) > .tdnone').click();
      cy.get('[data-cy="homepage_button_search"]').click();
      cy.url().should("contain", 'bialystok');
      cy.get('[data-testid="listing-grid"]').should("contain", 'rower');
    });
    it('Akceptacja ciastek', () => {
      olx.getCookiesButtonOlx().click().should('not.be.visible');
    });
    it("Filtr - kwota do 500 i sortuj", () => {
      cy.get('#root > div > div > form > div:nth-child(3) > div > div > div > div > div:nth-child(2) > div > div:nth-child(1) > div > input').type('500');
      cy.get('#root > div > div > form > div:nth-child(3) > div > div > div > div > div > div.css-1xqxmn3').click();
      cy.get('#root > div > div > form > div:nth-child(3) > div > div > div > div > div > div > div > div:nth-child(2)').click();
      cy.url().should("contain", '%5D=filter_float_price:desc&search%5Bfilter_float_price:to%5D=500');

    })
  })
})