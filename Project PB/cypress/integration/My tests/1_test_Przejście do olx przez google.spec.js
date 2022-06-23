/// <reference types="cypress" />
import quaries from '../../fixtures/olx_find.json'
import CookiesGoogle from '../../PageObject/CookiesGoogle'
const google = new CookiesGoogle
context('Wyszukanie olx i przejście do strony', () => {
    describe('Test 1', () => {
        beforeEach('wczytanie fixtures', () => {
            cy.fixture('olx_find').as('quariesFromAlias');
        })
        it('Wejście na google, zaakceptowanie ciastek i asercja + timeout', () => {
            cy.visit('www.google.com');
            cy.url().should('contain', 'www.google.com');
            cy.get('a', { timeout: 10000 })
        });

        it('Wpisanie frazy olx, wyszukanie i asercja', () => {
            cy.visit('www.google.com/search?q=' + quaries[0].fraze);
            cy.url().should('contains', quaries[0].fraze)
        });
        it('Ponowne ciasta', () => {
            google.getCookiesButton().click().should('not.be.visible');
        })

        it('Wybór wyszukania olx, przejście do strony i asercja + timeout', () => {
            cy.get('#rso > div > div > div > div > div > div > div > div.yuRUbf > a > div > cite').eq(0).click();
            cy.get('a', { timeout: 10000 });
            cy.url().should('contain', 'olx.pl')
        })
    })
})