// toda vez que criamos um arquivo JS com a primeira letra maiúscula, indica que estamos criando um módulo para CLASSE

export class Cliente {
    nome; 
    _cpf;
    
    get cpf() {
        return this._cpf;
    }

    constructor(nome, cpf) {
        this.nome = nome;
        this._cpf = cpf;
    }
}