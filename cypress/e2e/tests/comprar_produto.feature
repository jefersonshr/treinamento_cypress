Feature: Comprar produto

    Background: Adicionar produto ao carrinho
        Given que seleciono um produto da lista
        And clico em adicionar ao carrinho
        And o sistema atualiza o número de produtos no carrinho

    Scenario: Comprar produto do carrinho
        When clico no icone do carrinho
        And clico no botão Checkout
        And preencho os campos do cliente
        And clico no botão Continue
        And visualizo o produto para compra
        And clico botão Finish
        Then visualizo a mensagem de sucsso
