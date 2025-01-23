import Pages from '../pages/cypress.env.json';

describe('Automação Tenda Atacado', () => {
    it('Colocar 2 produtos no carrinho, pagando com boleto', () => {
      // Acessar o site
        cy.visit('https://marketplace-alpha.tendaatacado.com.br/')

        // Fechar pop up
        cy.get('.ButtonClose > .svgIcon').click()

        // Concordar e fechar
        cy.get('.disclaimer-container > [data-cy="btn-"]').click()

        // Procurar e adicionar produtos no carrinho
        cy.get('#searchbarComponent').click()
        cy.get('#shipping-cep').type(12504100)
        cy.get(':nth-child(2) > .card-content > .card-information-component > .content', {timeout: 20000}).click()
        cy.wait(3000)
        cy.get('#searchbarComponent').type('feijão')  
        cy.get('.input-group > div > .btn').click()
        cy.get(':nth-child(3) > .showcase-card-content > .menu-actions-icons > .ButtonBuyComponent > [data-cy="btn-"]', {timeout:10000}).click()
        cy.get('.menu-actions-icons > .box-quantity > .btn-action-decrement', {timeout:10000}).click()
        cy.get(':nth-child(3) > .showcase-card-content > .menu-actions-icons > .ButtonBuyComponent > [data-cy="btn-"]', {timeout:10000}).click()
        cy.get('#searchbarComponent').clear()
        cy.get('#searchbarComponent').type('Farinho de Trigo Select 1 kg')
        cy.get('.input-group > div > .btn', {timeout:10000}).click()
        cy.wait(5000)
        cy.get(':nth-child(1) > .showcase-card-content > .menu-actions-icons > .ButtonBuyComponent > [data-cy="btn-"]').click()
        cy.wait(5000)
        cy.get('.menu-actions-icons > .box-quantity > .btn-action-decrement').click()
        cy.wait(3000)
        cy.get(':nth-child(1) > .showcase-card-content > .menu-actions-icons > .ButtonBuyComponent > [data-cy="btn-"]').click()
        cy.wait(3000)
        cy.get('.icon-cart-ball > .svgIcon').click()
        cy.wait(3000)
        cy.get(':nth-child(1) > .cart-card-content > .menu-actions-icons > .box-quantity > .btn-action').click()
        cy.wait(3000)
        cy.get(':nth-child(2) > .cart-card-content > .menu-actions-icons > .box-quantity > .btn-action').click()
        cy.wait(3000)
        cy.get(':nth-child(1) > .cart-card-content > .menu-actions-icons > .box-quantity > .btn-action-decrement').click()
        cy.wait(3000)
        cy.get(':nth-child(2) > .cart-card-content > .menu-actions-icons > .box-quantity > .btn-action-decrement').click()
        cy.wait(3000)
        cy.get('.resume-buttons > .btn').click()

        // Criando cadastro
        cy.get('p > span').click()
        cy.get('#nome').type('Teste Tenda Atacado Trinta e Nove')
        cy.get('#cpf').type(57208270058)
        cy.get('#email').type('deann2668@uorak.com')    
        cy.get('#cellphone').type(11999543691)    
        cy.get('#password').type('testeTenda2038@')
        cy.get('#password2').type('testeTenda2038@')
        cy.get('.btn-create-account > [data-cy="btn-"]').click()
        cy.get('#code').type('2PBKJG')
        cy.get('form > [data-cy="btn-"]', {timeout:10000}).click()
        cy.get(':nth-child(1) > #gender').click()
        cy.get('[data-cy="inpt-text-day"]').type(9)
        cy.get('[data-cy="inpt-text-month"]').type(10)
        cy.get('[data-cy="inpt-text-year"]').type(1997)
        cy.get('.col-sm-12 > #name').type('Casa')
        cy.get('#zipCode').type(12504100)
        cy.wait(5000)
        cy.get('#number').type(965)
        cy.get('.btn-create-account > [data-cy="btn-"]', {timeout:10000}).click()
        cy.wait(2000)

        // Concluir a compra - fazer o pagamento
        cy.get('.delivery-actions-container > .btn-delivery').click()
        cy.wait(3000)
        cy.get(':nth-child(2) > .card-content > .card-information-component > .action > .fas', {timeout:10000}).click()
        cy.wait(3000)
        cy.get('.action > .fas').click()
        cy.wait(3000)
        cy.get('.action > .fas').click()
        cy.wait(3000)
        cy.get('.resume-buttons > .btn').click()
        cy.wait(6000)
        cy.contains('Boleto').click()
        cy.get('.btn-buy').click()
        cy.get('.content-checkout-tenda-variation > .action-area > :nth-child(2)').click()
        cy.get('.direction-right > .fas').click().click().click().click().click()
        cy.get('.action > .fas').click()
        cy.get('.btn-buy').click()
        cy.wait(40000)
        cy.get('#btFechar').click()

    });
});