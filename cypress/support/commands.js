Cypress.Commands.add('realizarLogin', ()=>{
    cy.visit('/')
    cy.get('[data-test="username"]').type('standard_user')
    cy.get('[data-test="password"]').type('secret_sauce')
    cy.get('#login-button').click()
    cy.get('.product_label').should('be.visible').and('contain', 'Products')
})