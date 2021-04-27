/* 
    TIPOS DE DADOS

    GRAMÁTICA
        - Elementos da linguagem e suas combinações
        - A arte de falar e escrever corretamente

    VOCABULÁRIO
        - Conjuntos de termos e expressões
        - Agrupamento de palavras

*/

/* 
    STRING

    - Cadeia de caracteres

    "" aspas duplas - utilizadas para textos normais, ou textos que contem aspas simples em seu conteudo
    '' aspas simples - utilizadas em textos normais, ou textos que contenham aspas duplas no conteudo
    `` template literals ou template strings - utilizar quando for codificar multiplas linhas

    as crases, ou template literals, também permitem o uso de expressões, com a estrutura ${}
*/

console.log('Gustavo')

console.log(`Gustavo ${1 + 1}`)

console.log(1 + 1)

/* 
    NUMBER
    - numeros

    33 - inteiros (positivos ou negativos)
    12.5 - reais - float
    Nan - Not a Number
    Infinity - infinito (case sensitive)
*/

console.log(33)
console.log(-34.3 / 2)

console.log(Infinity - 1000000000)

/* 
    BOOLEAN
    - dados que tem somente 2 valores
    - true - verdadeiro
    - false - falso
*/

console.log(false)

/* 
    undefined
        - indefinido, diferente de null
    
    null
        - nulo, objeto que não possui nada dentro
*/

console.log(null === undefined)

/* 
    OBJECT
        - objeto
        - Propriedades / Atributos
        - Funcionalidades / Métodos

    { propriedade: "valor" }

*/

console.log({
    name: "Gustavo",
    idade: 32,
    andar: function() {
        console.log('andar')
    }
})

/* 
    ARRAY
    - vetores
    - listas
    - agrupamento de dados

    ["Gustavo", 32]

*/

console.log(
    "leite",
    "ovos",
    2,
    12
)

/*  
    Conforme o ECMAScript, temos 9 tipos de dados

    ECMAScript: Órgão que controla e regulamenta os tipos de dados

    Data types
        - Primitive / Primitive value
        - Structural
        - Structural Primitive

    Primitivos - não sofrem alterações, não mudam
        - String
        - Number
        - Booleam
        - undefined
        - Symbol
        - BigInt

    Estruturais
        - Object
            - Array
            - Map
            - Set
            - Date
            - ... Standart built-in objects ()

        - Function

    Primitivo Estrutural / Structural Root Primitive
        - null
*/