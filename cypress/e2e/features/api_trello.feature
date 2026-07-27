# language: pt
Funcionalidade: Validação da API Trello Action

  Cenário: Validar consulta da Action do Trello e extração do campo name de list
    Quando enviar uma requisição GET para a API do Trello
    Então o status code da resposta deve ser 200
    E exibe no console o valor do campo "name" da estrutura "list"
    
