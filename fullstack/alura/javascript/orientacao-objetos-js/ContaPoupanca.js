import {Conta} from "./Conta.js";

export class ContaPoupanca extends Conta {
    constructor(saldoInicial, cliente, agencia) {
        super(saldoInicial, cliente, agencia); // o 'super' faz referencia à classe que estamos extendendo através do extends e é utilizada no constructor;
    }
}