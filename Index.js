/*npm init, que inicializará um gerenciador de pacotes que nos auxiliará
na criação do pacote. Esse gerenciador nos fará uma série de perguntas,
começando pelo nome do pacote, que será "bytebank".
Pressionando "Enter" conseguimos avançar para as próximas definições, 
como version, que manteremos a sugestão 1.0.0; description, 
que definiremos como "Projeto do bytebank para seus clientes"; 
entry point, que define o arquivo inicial de execução do programa, 
no nosso caso index.js (o padrão do JavaScript); test command, 
um comando para testes que manteremos vazio; git repository, 
que permite adicionar um repositório do GitHub, etapa que pularemos; 
keywords, para definir palavras-chave para o projeto, e que também pulares; 
author, que mantivemos vazio na gravação do treinamento, 
mas que você pode preencher com seu nome se preferir (ou alterar futuramente); e 
license, que manteremos a sugestão padrão.
{
  "name": "bytebank",
  "version": "1.0.0",
  "description": "Projeto do bytebank para seus clientes",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "Rodrigo",
  "license": "ISC",
  "type": "module"      <<-------------
}*/
import {Cliente} from "./Cliente.js"
import {ContaCorrente} from "./ContaCorrente.js"

const cliente1 = new Cliente();


cliente1.nome = 'Ricardo';
cliente1.cpf = 11445862223;
cliente1.rg = 22233366;

const contaRicardo = new ContaCorrente();

contaRicardo.agencia = 1001;
contaRicardo.cliente = cliente1;
contaRicardo.depositar(500);


console.log(cliente1)
console.log(contaRicardo)

const cliente2 = new Cliente();

cliente2.nome = 'Alice'
cliente2.cpf = 125498896365;
cliente2.rg = 15546662

const contaAlice = new ContaCorrente();
contaAlice.agencia = 1022;
contaAlice.cliente = cliente2;

contaRicardo.trasnferir(200 , contaAlice);
console.log(contaAlice)
console.log(contaRicardo)



