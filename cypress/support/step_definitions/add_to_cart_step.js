/// <reference types="cypress" />
import add_produto_index from "../../support/pages/add_produto/add_produto_index"
import { Given, Then, When } from "@badeball/cypress-cucumber-preprocessor"

Given('que seleciono um produto da lista', () => {
    cy.realizarLogin()
    add_produto_index.visualizarProduto('Sauce Labs Backpack')
})

When('clico em adicionar ao carrinho', () => {
    add_produto_index.clicarNoBotaoAdd()
}) 

Then('o sistema atualiza o número de produtos no carrinho', () => {
    add_produto_index.visualizarBotaoRemover()
    add_produto_index.visualizarContadorCarrinho()
})