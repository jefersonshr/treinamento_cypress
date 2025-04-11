Feature: Ordernar produtos

    Scenario: Ordenar produtos por preço do menor para o maior
    Given que acesso a pagina de produtos
    When seleciono o filtro de preço do menor para o maior
    Then o sistema apresenta a lista ordenada por preço crescente