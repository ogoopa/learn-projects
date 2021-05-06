export class ContaCorrente {
    agencia;
    saldo;

    // outra funcionalidade interessante dentro das classes são os 'atributos privados'. consiste em utilizar uma '#' antes do atributo (por ex, #saldo), e neste caso, a classe irá proteger o atributo, de modo que ele não poderá ser alterado no código fora da classe e nem exibido na console; todavia, esta funcionalidade ainda não está 'homologada', porém a comunidade de programadores entende (por convenção e boa prática) também que o caractere '_' antes do atributo (por ex, _saldo) significa que o atributo é privado, embora a linguagem não bloqueie a alteração do mesmo fora da classe ou a exibição no console neste segundo caso;

    // #saldo = 0; para saber mais, acesse: https://github.com/tc39/proposal-class-fields#private-fields

    sacar(valor) {
        if(this.saldo >= valor) {
            this.saldo -= valor;
            return valor;
        }
    } // as classes podem ter métodos, que determinam o comportamento das mesmas, como se fossem funções

    depositar(valor) {
        if(valor <= 0) return; // técnica de 'early return', onde é verificado tudo o que não queremos primeiro, se compararmos com o método 'sacar' acima, o return vem depois da ordem do if, no caso abaixo, colocamos o return antecipadamente, para otimizar a estrutura do código (em alguns casos)
            
        this.saldo += valor;
    }
}