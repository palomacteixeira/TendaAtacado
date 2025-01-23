class ProductPage {
  searchProduct(productName) {
    cy.get('#searchbarComponent').type(`${productName}{enter}`);
    cy.get('.input-group > div > .btn').click();
    cy.get('#searchbarComponent').clear().type(`${productName}{enter}`);
  }

  addFirstProductToCart() {
    cy.get(':nth-child(3) > .showcase-card-content > .menu-actions-icons > .ButtonBuyComponent > [data-cy="btn-"]').click();
  }

  decrementFirstProductQuantity() {
    cy.get('.menu-actions-icons > .box-quantity > .btn-action-decrement').click();
  }
}

export default new ProductPage();