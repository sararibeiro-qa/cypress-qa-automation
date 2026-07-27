import { When, Then } from "@badeball/cypress-cucumber-preprocessor";

let apiResponse;

When("enviar uma requisição GET para a API do Trello", () => {
  cy.request({
    method: "GET",
    url: "https://api.trello.com/1/actions/592f11060f95a3d3d46a987a",
    failOnStatusCode: false
  }).then((response) => {
    apiResponse = response;
  });
});

Then("o status code da resposta deve ser {int}", (statusCode) => {
  expect(apiResponse.status).to.eq(statusCode);
});

Then("exibe no console o valor do campo {string} da estrutura {string}", (fieldName, structureName) => {
  expect(apiResponse.body).to.have.property(structureName);
  const listName = apiResponse.body[structureName][fieldName];
  
  expect(listName).to.be.a("string");
  cy.log(`Conteúdo do campo '${fieldName}' dentro de '${structureName}': ${listName}`);
  console.log(`[Trello API] ${structureName}.${fieldName}:`, listName);
});
