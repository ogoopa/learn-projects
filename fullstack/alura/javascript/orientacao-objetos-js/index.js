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

const cliente1 = new Cliente("Gustavo", 11122233309);
const cliente2 = new Cliente("Letícia", 88822233309);
//console.log(cliente2.cpf);

// declaração da conta corrente cliente Gustavo

const conta1 = new ContaCorrente(cliente1, 1001);
const conta2 = new ContaCorrente(cliente2, 1002);

conta1.depositar(500)
conta1.transferir(200, conta2);

console.log(ContaCorrente.numeroDeContas);

/* 
contaCorrenteGustavo.depositar(-100);
contaCorrenteGustavo.depositar(100);
contaCorrenteGustavo.depositar(100);

const valorSacado = contaCorrenteGustavo.sacar(50);
 */
