# 🚀 Cypress Portfolio - Testes Automatizados E2E

![Cypress](https://img.shields.io/badge/Cypress-15.x-04C38E?style=for-the-badge&logo=cypress)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6-yellow?style=for-the-badge&logo=javascript)
![QA Automation](https://img.shields.io/badge/QA-Automation-blue?style=for-the-badge)

## 📌 Sobre o projeto

Este projeto foi desenvolvido com **Cypress** para demonstrar conhecimentos em **automação de testes End-to-End (E2E)** utilizando JavaScript.

O objetivo é criar cenários automatizados simulando ações reais de usuários em uma aplicação web, validando funcionalidades importantes e garantindo a qualidade do sistema.

---

## 🛠️ Tecnologias utilizadas

- **Cypress** - Framework de testes E2E
- **JavaScript** - Linguagem utilizada nos testes
- **Node.js** - Ambiente de execução
- **Git e GitHub** - Controle de versão e hospedagem do projeto

---

## 📂 Estrutura do projeto

```
cypress-portfolio
│
├── cypress
│   │
│   ├── e2e
│   │   └── busca-produtos.cy.js
│   │
│   ├── fixtures
│   │
│   └── support
│       ├── commands.js
│       └── e2e.js
│
├── cypress.config.js
├── package.json
├── package-lock.json
└── README.md
```

---

## ✅ Cenários automatizados

### 🔎 Busca de produtos

Cenário:

- Acessar a página de produtos
- Realizar uma busca
- Validar o retorno do produto pesquisado

Exemplo:

```
Usuário acessa o site
↓
Navega até produtos
↓
Pesquisa um produto
↓
Sistema apresenta o resultado esperado
```

---

## ⚙️ Como executar o projeto

### Pré-requisitos

Antes de iniciar, tenha instalado:

- Node.js
- Git

Verifique as versões:

```bash
node -v
```

```bash
npm -v
```

```bash
git --version
```

---

## 📥 Instalação

Clone o repositório:

```bash
git clone https://github.com/ivanbarbosa94/cypress-portfolio.git
```

Entre na pasta:

```bash
cd cypress-portfolio
```

Instale as dependências:

```bash
npm install
```

---

## ▶️ Executando os testes

### Abrir interface do Cypress

```bash
npx cypress open
```

Escolha:

```
E2E Testing
↓
Chrome
↓
Arquivo de teste
```

---

### Executar pelo terminal

```bash
npx cypress run
```

---

## 🧪 Exemplo de teste

```javascript
describe('Busca de produtos', () => {

  it('Deve buscar um produto com sucesso', () => {

    cy.visit('https://automationexercise.com');

    cy.contains('Products')
      .click();

    cy.get('#search_product')
      .type('Blue Top');

    cy.get('#submit_search')
      .click();

    cy.contains('Blue Top')
      .should('be.visible');

  });

});
```

---

## 📈 Próximas melhorias

- [ ] Implementar Page Object Model (POM)
- [ ] Criar testes de login
- [ ] Criar testes de cadastro
- [ ] Criar testes de carrinho
- [ ] Adicionar comandos personalizados
- [ ] Adicionar massa de dados com Fixtures
- [ ] Gerar relatórios de execução
- [ ] Configurar pipeline CI/CD com GitHub Actions

---

## 👨‍💻 Autor

**Ivan Barbosa**

Projeto desenvolvido para estudos e evolução em **QA Automation / Testes Automatizados**.

---

⭐ Se este projeto ajudou você ou demonstrou meu conhecimento em automação de testes, considere deixar uma estrela no repositório.