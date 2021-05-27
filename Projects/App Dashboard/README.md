# App Dashboard

Um app de painel básico de consulta e requisição de informações de um banco de dados MySQL utilizando PHP em conjunto com as bibliotecas do JavaScript: jQuery (para seleção dos elementos da página HTML) e Ajax (para requisição dos dados obtidos pelo PHP e também requisição e injeção de elementos na página principal do HTML).

## Testes

Como esta é uma aplicação simples e apenas para fins didáticos, tudo foi feito de forma manual e o mais simples possível, mas caso queira testar, eis os passos.

- Primeiro é preciso ter o XAMPP instalado;
- Abra o XAMPP, inicie o Servidor Apache e o MySQL e logo após abra o PHPMyAdmin (```http://localhost/phpmyadmin/```);
- Abra a pasta raiz do XAMPP, localize a pasta ```htdocs``` e cole todo o conteúdo da pasta do meu projeto ```app_dashboard``` lá;
- No PHPMyAdmin, navega até a guia SQL e execute toda query do arquivo ```querys.sql```. Isso irá criar o Banco de Dados do app;
- Em seguida, é só abrir ```http://localhost/app_dashboard/```
