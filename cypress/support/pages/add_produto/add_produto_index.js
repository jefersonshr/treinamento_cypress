const el = require('./add_produto_elements').elements

class Add_Produto {
    visualizarTitulo() {
        cy.get(el.tituloHome).should('be.visible').and('contain', 'Productss')
    }

    visualizarProduto(produto) {
        cy.contains(produto).should('be.visible').click()
    }

    clicarNoBotaoAdd() {
        cy.get(el.botaoAdd).click()
    }

    visualizarBotaoRemover() {
        cy.get(el.botaoRemove).should('be.visible')
    }

    visualizarContadorCarrinho() {
        cy.get(el.contadorCarrinho).should('be.visible').and('contain', '1')
    }

    ordenarProdutos() {
        cy.get(el.campoOrdenar).select('Price (low to high)')
    }

    verificarOrdenacao() {
        cy.get(el.textoValorProduto).invoke('text').then((text) => {
            const preco = text
                .split('\n')
                .map(preco => parseFloat(preco.replace('$', '').trim()))

            const precoOrdenado = [...preco].sort((a, b) => a - b)
            expect(preco).to.deep.equal(precoOrdenado)
        })
    }

    clicarIconeCarrinho(){
        cy.get(el.iconeCarrinho).click()
    }

    clicarBotaoCheckout(){
        cy.get(el.botaoCheckout).click()
    }

    preencherCampoFisrtName(firstName){
        cy.get(el.campoFirstName).type(firstName)
    }

    preencherCampoLastName(lastName){
        cy.get(el.camposLastName).type(lastName)
    }

    preencherCampoPostalCode(postalCode){
        cy.get(el.campoPostalCode).type(postalCode)
    }

    clicarBotaoContinue(){
        cy.get(el.botaoContinue).click()
    }

    visualizarProdutoParaCompra(nomeProduto){
        cy.get(el.nomeProduto).should('be.visible').and('contain', nomeProduto)
    }

    clicarBotaoFinish(){
        cy.get(el.botaoFinish).click()
    }

    visualizarMensagemSucesso(mensagem){
        cy.get(el.mensagem).should('be.visible').and('have.text', mensagem)
        cy.get(el.imagem).should('be.visible')
    }

}

export default new Add_Produto()