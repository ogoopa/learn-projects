import {Conta} from "./Conta.js";

export class ContaCorrente extends Conta {
    static numeroDeContas = 0;

    constructor(cliente, agencia) {
        super(0, cliente, agencia); // o 'super' faz referencia à classe que estamos extendendo através do extends e é utilizada no constructor;
        ContaCorrente.numeroDeContas += 1;
    }

    /* teste() {
        super.teste();
        console.log("teste na classe conta corrente");
    } */

    sacar(valor) {

        let taxa = 1.1;
        return this._sacar(valor, taxa);
    }
}