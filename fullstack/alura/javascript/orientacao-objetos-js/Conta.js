export class Conta {
    // o constructor é recomendado para iniciar qualquer variável nas classes
    constructor(saldoInicial, cliente, agencia) {
        this._saldo = saldoInicial;
        this._cliente = cliente;
        this._agencia = agencia;
        if(this.constructor == Conta) {
            console.log("Você não deveria instanciar um objeto do tipo 'Conta'.")
        }
    }

    // outra funcionalidade interessante dentro das classes são os 'atributos privados'. consiste em utilizar uma '#' antes do atributo (por ex, #saldo), e neste caso, a classe irá proteger o atributo, de modo que ele não poderá ser alterado no código fora da classe e nem exibido na console; todavia, esta funcionalidade ainda não está 'homologada', porém a comunidade de programadores entende (por convenção e boa prática) também que o caractere '_' antes do atributo (por ex, _saldo) significa que o atributo é privado, embora a linguagem não bloqueie a alteração do mesmo fora da classe ou a exibição no console neste segundo caso;
    // os atributos privados, por convenção, devem ficar depois dos atributos comuns
    // para saber mais, acesse: https://github.com/tc39/proposal-class-fields#private-fields
    // acessores (encapsulando o código para que não seja alterado)

    set cliente(novoValor) {
        if(novoValor instanceof Cliente) {
            this._cliente = novoValor;
        }
    }

    get cliente() {
        return this._cliente;
    }

    get saldo() {
        return this._saldo;
    }

    // as classes podem ter métodos, que determinam o comportamento das mesmas, como se fossem funções

    sacar(valor) {
        let taxa = 1;
        return this.sacar(valor, taxa); 
    }

    _sacar(valor, taxa) {
        const valorSacado = taxa * valor;
        if(this._saldo >= valorSacado) {
            this._saldo -= valorSacado;
            return valorSacado;
        }
        return 0;
    }
    
    depositar(valor) {
        if(valor <= 0) return; // técnica de 'early return', onde é verificado tudo o que não queremos primeiro, se compararmos com o método 'sacar' acima, o return vem depois da ordem do if, no caso abaixo, colocamos o return antecipadamente, para otimizar a estrutura do código (em alguns casos)         
        this._saldo += valor;
    }

    transferir(valor, conta) {
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
    }

    /* teste() {
        console.log("teste na classe conta")
    } */
}