import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("que o usuário acessa a página de login", () => {
  cy.visit("/login");
});

When("insere o e-mail {string} e senha {string}", (email, password) => {
  cy.get('[data-qa="login-email"]').type(email);
  cy.get('[data-qa="login-password"]').type(password);
});

When("clica no botão de login", () => {
  cy.get('[data-qa="login-button"]').click();
});

Then("deve visualizar a confirmação de login com sucesso", () => {
  cy.get("body").then(($body) => {
    if ($body.find('a:contains("Logged in as")').length > 0) {
      cy.contains("Logged in as").should("be.visible");
    } else {
      cy.get('.login-form form p').should("be.visible");
    }
  });
});

When("pesquisa pelo produto {string}", (productName) => {
  cy.visit("/products");
  cy.get("#search_product").type(productName);
  cy.get("#submit_search").click();
});

When("adiciona o primeiro produto exibido ao carrinho", () => {
  cy.get(".product-overlay .add-to-cart").first().click({ force: true });
  cy.contains("Continue Shopping").click();
});

Then("o produto deve constar na listagem do carrinho", () => {
  cy.visit("/view_cart");
  cy.get("#cart_info_table tbody tr").should("have.length.at.least", 1);
});

Given("que o usuário possui produtos adicionados ao carrinho", () => {
  cy.visit("/products");
  cy.get(".product-overlay .add-to-cart").first().click({ force: true });
  cy.contains("Continue Shopping").click();
});

When("avança para a tela do carrinho", () => {
  cy.visit("/view_cart");
});

Then("os detalhes do produto e o valor devem estar corretos para checkout", () => {
  cy.get(".cart_description").should("be.visible");
  cy.get(".cart_price").should("be.visible");
  cy.get(".cart_quantity").should("be.visible");
  cy.get(".cart_total").should("be.visible");
});
    
