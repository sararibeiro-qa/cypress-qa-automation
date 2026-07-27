# language: pt
Funcionalidade: Fluxo de Compras e Autenticação na Automation Exercise

  Contexto:
    Dado que o usuário acessa a página de login

  Cenário: Realizar Login com sucesso
    Quando insere o e-mail "teste2021@teste.com.br" e senha "teste"
    E clica no botão de login
    Então deve visualizar a confirmação de login com sucesso

  Cenário: Buscar produto e adicionar ao carrinho
    Quando pesquisa pelo produto "Dress"
    E adiciona o primeiro produto exibido ao carrinho
    Então o produto deve constar na listagem do carrinho

  Cenário: Validar produtos no carrinho na tela de pagamento
    Dado que o usuário possui produtos adicionados ao carrinho
    Quando avança para a tela do carrinho
    Então os detalhes do produto e o valor devem estar corretos para checkout
    
