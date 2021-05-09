/* 
    PROJETO: BYTE BANK
    CASE: sistema de cadastro de clientes e contas correntes para os clientes realizarem operações

Para o Javascript interpretar classes de outros arquivos, é necessário importar utilizando os comandos conforme abaixo. Além disso, é necessário apontar o setar o 'type' = "module" no package.json, o que pode ser feito através do terminal. Para mais informações, leia o arquivo sobre-npm.md, na pasta deste projeto.
*/

import {Cliente} from "./Cliente.js";
import {ContaCorrente} from "./ContaCorrente.js";
import {ContaPoupanca} from "./ContaPoupanca.js";
import {Conta} from "./Conta.js";

// declaração dos clientes

const cliente1 = new Cliente("Gustavo", 11122233309);
const conta1 = new ContaCorrente(0, cliente1, 1001);
const contaPoupanca = new ContaPoupanca(50, cliente1, 1001);
const conta = new Conta(0, cliente1, 1001);

console.log(conta);


