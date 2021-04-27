/* 
    VARIÁVEIS
        - nomes simbólicos para receber algum valor
        - atalhos de código
        - identificadores
        - 3 palavras reservadas para declarar uma variável
            - var - global e também local (o que existe dentro de um escopo (argumentos dentro de {}) )
            - let
            - const - (constante)
        - na linguagem mais moderna, são mais utilizados as variáveis let e const
        - em variáveis GLOBAIS, como no caso da var, existe o conceito de HOISTING (elevação), onde o interpretador busca as variáveis e executa as declarações antes da sequência vertical no código, o que muda o cenário lógico
*/


// VAR - a variável muda

var clima = "Quente"
    clima = "Frio"

console.log(clima)

// LET - a variável muda, semelhante ao var

let clima2 = "Quente"
    clima2 = "Frio"

console.log(clima2)

// CONST - a variável não muda

const   clima3 = "Quente"

console.log(clima3)

/* 
    TIPOS DINÂMICOS
        - algumas variaveis precisam ser 'tipadas', ou seja, deve-se declarar um atributo, com por exemplo

        let clima:String = "Quente"

        - no caso, a variável seria 'fortemente tipada'
        - ela também é dinamica, pois pode alterar
*/

let clima4 = true // boolean
    clima4 = "" // string

    console.log(typeof clima4)


/* 
    SCOPE
        - escopo determina a visibilidade de alguma variável no JS

    BLOCK STATEMENT
        - declaração de bloco
        {

        }

    o var é GLOBAL e irá funcionar com a estrutura HOISTING (elevação)
    o let e o const são locais, só funcionam dentro de escopos locais, dentro de {}

*/


{
    let x = 0
    console.log(x)
}

// se você declarar uma variável let fora de um scope {}, e dentro do scope você não declarar, o interpretador irá buscar o valor da variável fora das chaves, independentemente de quantos niveis ele tiver de 'recuar' e irá atualizar também o valor da variável fora, seguindo a interpretação vertical do código 

let y = 1;

{
    {
        {
            y = 0
            console.log('> existe y', y)
        }
    }
}

console.log('> existe y depois do bloco', y)


// o mesmo não acontece se você declarar a variável let também dentro do scope. neste caso, será atualizado apenas o valor de dentro do scope

let z = 1;

{
    {
        {
            let z = 0
            console.log('> existe y', z)
        }
    }
}

console.log('> existe y depois do bloco', z)

/* 
    Criando nomes de variáveis

    - JS é case-sensitive
    - JS aceita a cadeia de caracteres Unicode

    Posso:

    - Iniciar com esses caracteres especiais: $ _
    - Iniciar com letras
    - Colocar acentos
    - Letras maiúsculas e minúsculas fazem a diferença

    Não posso

    - Iniciar com números
    - Colocar espaços vazios no nome

    Ideal

    - Criar nomes que fazem sentido
    - Que explique o que a variável é ou faz
    - camelCase
    - snake_case
    - Escrever em Inglês

*/

