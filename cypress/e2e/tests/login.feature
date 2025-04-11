Feature: Acessar o sistema 

    Scenario: Acessar o sistema com sucesso
        Given que acesso a pagina de login
        And informo meu nome de usuario
        And informo minha senha
        When clico no botão login
        Then o sistema apresenta a tela incial