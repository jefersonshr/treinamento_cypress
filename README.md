# 🧪 Treinamento Cypress com POM e Cucumber

Este repositório é um exemplo de projeto de testes automatizados utilizando o **Cypress**, com **Cucumber** para escrita dos cenários em Gherkin e o padrão **Page Object Model (POM)** para organização e reutilização de código.

---

## 🚀 Tecnologias utilizadas

- [Cypress](https://www.cypress.io/)
- [Cucumber (cypress-cucumber-preprocessor)](https://github.com/badeball/cypress-cucumber-preprocessor)
- [TypeScript](https://www.typescriptlang.org/)
- [JavaScript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)
- Page Object Model (POM)

---

## 📁 Estrutura de Diretórios

```
treinamento_cypress/
├── cypress/
│   ├── e2e/
│   │   └── features/
│   │       ├── login.feature
│   │       └── step_definitions/
│   ├── pageObjects/
│   │   └── LoginPage.ts
│   ├── reports/
│   │   ├── cucumber-html-report/
│   ├── support/
│   │   ├── commands.ts
│   │   └── e2e.ts
├── cypress.config.ts
├── package.json
├── tsconfig.json
```

---

## 📦 Instalação

1. Clone o repositório:

```bash
git clone https://github.com/jefersonshr/treinamento_cypress.git
cd treinamento_cypress
```

2. Instale as dependências:

```bash
npm install
```

---

## 🧪 Executando os Testes

### 🔁 Executar em modo interativo (com interface)

```bash
npx cypress open
```

### ⚙️ Executar em modo headless (sem interface)

```bash
npx cypress run
```

---

## 🧠 Exemplo de Cenário (login.feature)

```gherkin
Feature: Funcionalidade de login

  Scenario: Login com sucesso
    Given que o usuário está na página de login
    When ele preenche usuário e senha válidos
    Then ele deve ser redirecionado para a página inicial
```

---

## 🧱 Exemplo de Page Object (LoginPage.ts)

```ts
class LoginPage {
  visit() {
    cy.visit('/login')
  }

  fillUsername(username: string) {
    cy.get('#username').type(username)
  }

  fillPassword(password: string) {
    cy.get('#password').type(password)
  }

  submit() {
    cy.get('button[type="submit"]').click()
  }
}

export default new LoginPage()
```

---

## 📚 Referências

- [Documentação do Cypress](https://docs.cypress.io/)
- [Cypress Cucumber Preprocessor](https://github.com/badeball/cypress-cucumber-preprocessor)
- [Boas práticas com Page Object Model](https://docs.cypress.io/e2e-testing-best-practices/page-objects)

---

## 🤝 Contribuindo

Contribuições são bem-vindas! Fique à vontade para abrir *issues* ou enviar *pull requests* com melhorias, correções ou novas ideias.

---

## 📝 Licença

Este projeto está licenciado sob a licença [MIT](LICENSE).

---

Desenvolvido com 💙 por [@jefersonshr](https://github.com/jefersonshr)
---

## 🥒 Passos para Instalação do Cucumber no Cypress

### 1. Instale a dependência no seu projeto

Abra o terminal na pasta do seu projeto e execute o seguinte comando para instalar a dependência do `@badeball/cypress-cucumber-preprocessor`:

```bash
npm install --save-dev @badeball/cypress-cucumber-preprocessor
```

### 2. Altere o arquivo `cypress.config.js` para `cypress.config.ts`

Localize o arquivo `cypress.config.js` na raiz do seu projeto e renomeie-o para `cypress.config.ts`. Essa mudança é necessária para que você possa utilizar TypeScript no seu arquivo de configuração.

### 3. Substitua o conteúdo do arquivo `cypress.config.ts`

Abra o arquivo `cypress.config.ts` e substitua o conteúdo por este código:

```ts
import { defineConfig } from "cypress";
import createBundler from "@bahmutov/cypress-esbuild-preprocessor";
import { addCucumberPreprocessorPlugin } from "@badeball/cypress-cucumber-preprocessor";
import createEsbuildPlugin from "@badeball/cypress-cucumber-preprocessor/esbuild";

export default defineConfig({
  e2e: {
    specPattern: "**/*.feature",
    async setupNodeEvents(
      on: Cypress.PluginEvents,
      config: Cypress.PluginConfigOptions
    ): Promise<Cypress.PluginConfigOptions> {
      // Necessário para o pré-processador gerar relatórios em JSON após cada execução
      await addCucumberPreprocessorPlugin(on, config);

      on(
        "file:preprocessor",
        createBundler({
          plugins: [createEsbuildPlugin(config)],
        })
      );

      // Retorne o objeto de configuração, pois ele pode ter sido modificado pelo plugin
      return config;
    },
  },
});
```

Este código configura o Cypress para utilizar o Cucumber com o pré-processador adequado.

### 4. Instale o pré-processador `@bahmutov/cypress-esbuild-preprocessor`

```bash
npm install --save-dev @bahmutov/cypress-esbuild-preprocessor
```

### 5. Atualize o Visual Studio Code caso haja erro no import do arquivo `cypress.config.ts`

Se você perceber algum erro de importação na linha 2 do arquivo `cypress.config.ts`, siga estas etapas para resolver:

- No Visual Studio Code, clique no menu **View (Visualizar)** e selecione **Command Palette**.
- Na barra de busca, digite `Reload Window` e selecione a opção para recarregar o projeto.

### 6. Instale o `ts-loader`

```bash
npm install ts-loader --save-dev
```

### 7. Crie o arquivo `tsconfig.json`

Crie um novo arquivo chamado `tsconfig.json` na raiz do seu projeto e cole o seguinte conteúdo:

```json
{
  "compilerOptions": {
    "paths": {
      "@badeball/cypress-cucumber-preprocessor/*": [
        "./node_modules/@badeball/cypress-cucumber-preprocessor/dist/subpath-entrypoints/*"
      ]
    }
  }
}
```

### 8. Atualize o import no arquivo `cypress.config.ts`

No arquivo `cypress.config.ts`, certifique-se de que o import abaixo esteja como primeiro:

```ts
import createBundler from "@bahmutov/cypress-esbuild-preprocessor";
```
