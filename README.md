# mLabs-Front-End-Test
Projeto para o processo seletivo.

## Ferramentas:
Foi utilizado na produção do projeto o framework AngularJS para a estrutura, e Bootstrap
para o visual. Para testes e2e, protractor, e para TDD, Karma+jasmine.
Escolhi trabalhar com AngularJS no desenvolvimento do projeto, por que possuo 2 anos de
experiência com framework. Cogitei em usar Angular ou React (que são ferramentas mais novas),
mas, ter mais experiência com AngularJS foi o determinante.

## Instruções de instalação:

Na pasta raiz do projeto abra um terminal.

Use *npm install* para instalar as dependências do projeto.
Use *npm install -g protractor* ferramenta para testes e2e.
E seguida *webdriver-manager update* para atualizar o protractor.

## Instruções de uso:

Para iniciar o projeto apenas digite no terminal: *npm run start*
depois é so entrar em uma das urls que aparecerão.

Para iniciar os testes e2e, abra uma segunda janela do terminal e digite:
*webdriver-manager start* e depois em uma terceira janela do terminal, inicie os testes com: *npm run test:e2e*

Para os testes unitários, apenas digite no terminal: *npm run test:unit*