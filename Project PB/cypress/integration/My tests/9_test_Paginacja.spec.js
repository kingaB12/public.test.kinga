/// <reference types="cypress" />
import CookiesOlx from '../../PageObject/CookiesOlx'
const olx = new CookiesOlx
context('Przejście do olx i wyszukanie frazy dla Białegostoku ', () => {
   describe('Test 9', () => {
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
      it('Paginacja - Strona 3', () => {
         cy.get('#root > div > div> form > div:nth-child(5) > div > section.css-j8u5qq > div > ul > li:nth-child(3)').click();
         cy.url().should("contain", 'page=3');
      })
      it('Paginacja - Następna strona', () => {
         cy.get('#root > div > div > form > div:nth-child(5) > div > section.css-j8u5qq > div > ul > a:nth-child(7) > svg').click();
         cy.url().should("contain", 'page=4');
      });
      it('Paginacja - Pierwsza strona', () => {
         cy.get('#root > div > div > form > div:nth-child(5) > div > section.css-j8u5qq > div > ul > li:nth-child(2)').click();
         cy.url().should("contain", 'page=1');
      })
   })
})