/// <reference types="cypress" />
import add_produto_index from "../../support/pages/add_produto/add_produto_index"
import { Given, Then, When } from "@badeball/cypress-cucumber-preprocessor"

When('clico no icone do carrinho', () => {
    add_produto_index.clicarIconeCarrinho()
})

When('clico no botão Checkout', () => {
    add_produto_index.clicarBotaoCheckout()
})

When('preencho os campos do cliente', () => {
    add_produto_index.preencherCampoFisrtName('Jeferson')
    add_produto_index.preencherCampoLastName('Rodrigues')
    add_produto_index.preencherCampoPostalCode('79039899')
})

When('clico no botão Continue', () => {
    add_produto_index.clicarBotaoContinue()
})

When('visualizo o produto para compra', () => {
    add_produto_index.visualizarProdutoParaCompra('Sauce Labs Backpack')
})

When('clico botão Finish', () => {
    add_produto_index.clicarBotaoFinish()
})

Then('visualizo a mensagem de sucsso', () => {
    add_produto_index.visualizarMensagemSucesso('THANK YOU FOR YOUR ORDER')
})