/* 
    PROJETO: BYTE BANK
    CASE: sistema de cadastro de clientes e contas correntes para os clientes realizarem operações
*/

/*  

Para o Javascript interpretar classes de outros arquivos, é necessário importar utilizando os comandos conforme abaixo.

Além disso, é necessário apontar o setar o 'type' = "module" no package.json, o que pode ser feito através do terminal. Para mais informações, leia o arquivo sobre-npm.md, na pasta deste projeto.

*/

import {Cliente} from "./Cliente.js"
import {ContaCorrente} from "./ContaCorrente.js"

// declaração dos clientes

const cliente1 = new Cliente();
cliente1.nome = "Gustavo";
cliente1.cpf = 11122233309;

const cliente2 = new Cliente();
cliente2.nome = "Letícia";
cliente2.cpf = 88822233309;

// declaração da conta corrente cliente Gustavo

const contaCorrenteGustavo = new ContaCorrente();
contaCorrenteGustavo.agencia = 1001;
contaCorrenteGustavo.saldo = 0;

// ações

contaCorrenteGustavo.depositar(100);
contaCorrenteGustavo.depositar(100);
contaCorrenteGustavo.depositar(100);

const valorSacado = contaCorrenteGustavo.sacar(50);

console.log(valorSacado);
console.log(contaCorrenteGustavo);

