/// <reference types="cypress" />
import add_produto_index from "../../support/pages/add_produto/add_produto_index"
import { Given, Then, When } from "@badeball/cypress-cucumber-preprocessor"

Given('que acesso a pagina de produtos', () => {
    cy.realizarLogin()
})

When('seleciono o filtro de preço do menor para o maior', () => {
    add_produto_index.ordenarProdutos()
})

Then('o sistema apresenta a lista ordenada por preço crescente', () => {
    add_produto_index.verificarOrdenacao()
})