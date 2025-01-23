import BasePage from './basePage';

class HomePage extends BasePage {
    visit() {
        cy.visit('https://marketplace-alpha.tendaatacado.com.br/');
        this.waitForElementToBeVisible('.ButtonClose > .svgIcon');
    }

    closePopup() {
        cy.get('.ButtonClose > .svgIcon').click();
        this.waitForElementToBeVisible('.disclaimer-container > [data-cy="btn-"]');
        cy.get('.disclaimer-container > [data-cy="btn-"]').click();
    }

    searchProduct(product) {
        this.waitForElementToBeVisible('#searchbarComponent');
        cy.get('#searchbarComponent').type(product);
        cy.get('.input-group > div > .btn').click();
    }
}

export default HomePage;