console.log('Bem vindos ao Starter')

/* Comentários no JAVASCRIPT */

// Objeto person com suas propriedades criadas, nome, idade, peso e isAdmin, e seus respectivos valores

const pessoas = {
    nome: 'John',
    idade: 30,
    peso: 88.6,
    isAdmin: true,
}

console.log(`${pessoas.nome} tem ${pessoas.idade} anos.`)

// Arrays []

const animals = [
    'Lion',
    'Monkey',
    {
        name: 'Cat', // criando um objeto dentro do array
        age: 3   
    },
    'Dog',
    'Butterfly'
]

// acessar valores dentro do Array, sendo que a primeira posição é sempre '0'
console.log(animals[0])

// verificar o comprimento de um Array
console.log(animals.length)

// acessar o objeto dentro do array
console.log(animals[2].name)

// *é possível utilizar objetos e strings no mesmo array, porém isso não é usual

// contar quantos caracteres tem uma palavra e quantos dígitos tem um número

let word = "Paralelepípedo"
console.log(word.length)

let number = 123456
console.log(String(number).length)

// transformar um numero quebrado com duas casas decimais e trocar ponto por virgula

let number2 = 4253454.537534
console.log(number2.toFixed(2).replace(".",","))

// transforme letras minúsculas em maiúsculas. faça o contrário disso também

let word2 = "Programar é muito bacana!"
console.log(word2.toUpperCase())

let word3 = "Programar é muito bacana MESMO!"
console.log(word3.toLowerCase())

// verificar se o texto contém a palavra Amor - 0 includes é CASE SENSITIVE

let phrase = "Eu quero viver o Amor!"
console.log(phrase.includes("Amor"))

// separe um texto que contém espaços, em um novo array onde cada texto é uma posição do array. depois disso, transforme o array em um texto e onde eram espaços, coloque_ e transforme em maiusculas
// split

let phrase2 = "Eu quero viver o Amor!"
let myArray = phrase.split(" ")
console.log(myArray)
console.log(myArray.length)
let pharseWithUnderscore = myArray.join("_")
console.log(pharseWithUnderscore.toUpperCase())

// criar Array com um construtor

let meuArray = ['a','b','c'] //sem o contrutor
console.log(meuArray)

let meuArray2 = new Array('a','b','c') //com o contrutor
console.log(meuArray2)

// contar elementos de um array: .lenght
// cada elemento de um array pode ser um tipo de dado, inclusive uma função

// transformar uma cadeia de caracteres em elementos de um array

let palavra = "manipulação"
console.log(Array.from(palavra))

/*
    Manipulando Arrays
*/
let techs = ["html","css","js"]

// adicionar um item no fim
techs.push("nodejs")

// adicionar no começo
techs.unshift("sql")

// remover do fim
//techs.pop()

// remover do começo
//techs.shift()

// pegar somente alguns elementos do array
// console.log(techs.slice(1, 3))

// remover 1 ou mais itens em qualquer posição do array
//techs.splice(1, 2)

// encontrar a posição de um elemento no array
let index = techs.indexOf('css')


console.log(techs)

/* Expressões e Operadores

    - Expressions
        qualquer linha ou trecho de código com ação, por ex: let number = 1
        pode terminar com ; ou não

    - Operators
        - Binary
            number + 1
        - Unary
            ++number
            - typeof
            - delete
        - Ternary
            true ? 'alo' : 'nada' // conceito de se, se não

*/

/* 
    new

    - left-hand-style expression
    - criar um novo objeto

*/

let nome = new String('Gustavo')
nome.sobreNome = 'Parizi'

let idade = new Number(32)
console.log(nome.sobreNome, idade)

/* OPERADORES ARITMÉTICOS */

// multiplicação
console.log(3.2 * 5.5)

// divisão
console.log(12 / 2)

// soma
console.log(43 + 67)

// subtração
console.log(33 - 22)

// resto da divisão
console.log(11 % 3)

// incremento ++
let incremento = 0
console.log(incremento++) 



// decremento
let decremento = 0
console.log(decremento--)

// para incrementar ou decrementar antes, deve se colocar o ++ ou -- no inicio
console.log(++incremento)
console.log(--decremento)

// exponencial
console.log(4 ** 3)

// grouping operator ( )

let total = (3 + 4) * 5
console.log(total)

// operadores de comparação - irá comparar valores e retornar um Boolean como resposta à comparação

let one = 1
let two = 2

//  = atribuição, receber
//  == igual
console.log(one == 1) // true
console.log(one == '1') // true

//  != diferente
//  === estritamente igual
console.log(one === 1) // true
console.log(one === '1') // false

//  !== estritamente diferente
//  > maior
//  >= maior igual
//  < menor
//  <= menor igual

// Operadores de atribuição (Assignment)

// assignment
// x1 = 1;

// addition assignment
// x = x + 2
// x2 += 2;

// subtraction assignment
// x = x - 1
// x3 -= 1;

// multiplication assignment
// x4 *= 2;

// division assignment
// x5 /= 2;

// remainder, exponetiation
// x6 %= 2;
// x7 **= 2;

// operadores lógicos (logical operators)

// 2 valores booleanos, quando verificados, resultarão em verdadeiro ou falso

let pao = true
let queijo = true

// AND &&
console.log(pao && queijo)

// OR ||
console.log(pao || queijo)

// NOT !
console.log(!pao)

/*
    operador condicional (Ternário) 

    - dependendo da condição, nós recebemos valores diferentes
    - condição então valor 1 se não valor 2
    - condition ? value1 : value2

*/

// café top exemplo
let bread = true
let cheese = true

const niceBreakfast = bread && cheese ? 'café top' : 'café ruim'

console.log(niceBreakfast)

// maior de 18
let age = 16
const canDrive = age >= 18 ? 'can drive' : "can't drive"
console.log(canDrive)

// operador de string

// comparison (comparação)
console.log('a' == 'a')

// concatenation (concatenação)
let alpha = 'alpha'
console.log(alpha + 'bet')

/* Type conversion (typecasting) vs Type coersion */

/* FALSY - quando um valor é considerado false em contextos onde um booleano é obrigatório (condicionais e loops)

false
0
-0
""
null
undefined
NaN

*/

/* TRUTHY - quando um valor é considerado true em contextos onde um booleano é obrigatório (condicionais e loops)

true
{}
[]
1
3.23
"0"
"false"
-1
Infinity
-Infinity

*/

/* Operator precedence 

- grouping      ( )
- negação e incremento  ! ++ --
- multiplicação e divisão  * /
- adição e subtração  + -
- relacional  < <= > >=
- igualdade  == != === !==
- AND  &&
- OR ||
- conditional  ? :
- atribuição (assignment)  = += -= *+=

*/

console.log((2 + 5) * 10)

