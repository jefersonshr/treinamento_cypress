Feature: Adicionar produto ao carrinho do usuário

    Scenario: Adcionar novo produto ao carrinho
    Given que seleciono um produto da lista
    When clico em adicionar ao carrinho
    Then o sistema atualiza o número de produtos no carrinho
