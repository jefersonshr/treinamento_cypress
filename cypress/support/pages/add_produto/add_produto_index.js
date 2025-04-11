const el = require('./add_produto_elements').elements

class Add_Produto {
    visualizarTitulo() {
        cy.get(el.tituloHome).should('be.visible').and('contain', 'Products')
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
}

export default new Add_Produto()