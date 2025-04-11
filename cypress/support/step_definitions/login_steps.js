/// <reference types="cypress" />
import login_index from "../../support/pages/login/login_index"
import add_produto_index from "../../support/pages/add_produto/add_produto_index"
import { Given, Then, When } from "@badeball/cypress-cucumber-preprocessor"

Given('que acesso a pagina de login', () => {
    cy.visit('/')
})

When('informo meu nome de usuario', () => {
    login_index.preencherUsername('standard_user')
})

When('informo minha senha', () => {
    login_index.preencherCampoPassword('secret_sauce')
})

When('clico no botão login', () => {
    login_index.clicarBotaoLogin()
})

Then('o sistema apresenta a tela incial', () => {
    add_produto_index.visualizarTitulo()
})
