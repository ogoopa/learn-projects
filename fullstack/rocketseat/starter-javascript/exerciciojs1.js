 
//    1 - Declare uma variável de nome weight
//let weight;

//    2 - Que tipo de dado é a variável acima? R: undefined
//console.log(typeof weight)

/*
    3 - Declare uma variável e atribua valores para cada um dos dados
            - name: String
            - age: Number (integer)
            - stars: Number (float)
            - isSubscribed: Boolean


let name = "Gustavo"
let age = 32
let stars = 4.7
let isSubscribed = true

*/

//       4 - A variável student abaixo é de que tipo de dado? R: Object
//      4.1 - Atribua a ela as mesmas propriedades e valores do exercício 3
//      4.2 - Mostre no console a seguinte mensagem: <name> de idade <age> pesa <weight> kg.


let student = {
    name: "Gustavo",
    age: 32,
    stars: 4.7,
    weight: 89.9,
    isSubscribed: true, // a virgula no ultimo valor é opcional
    }

console.log(`${student.name} de idade ${student.age} pesa ${student.weight} kg.`)

//      5 - Declare uma variável do tipo Array de nome students e atribua a ela nenhum valor, ou seja, somente o Array vazio

// let students = []

//      6 - Retribua valor para a variável acima, colocando dentro dela o objeto student da questão 4. Não copiar e colar o objeto, mas usar o objeto criado e inserir ele no Array

//      7 - Coloque no console o valor da posição zero deste Array

//      8 - Crie um novo student e coloque na posição 1 do Array students


let students = [
    student
]

const john = {
    name: "John",
    age: 37,
    stars: 4.3,
    weight: 84.9,
    isSubscribed: true,
}

/* uma forma de fazer o exercicio 8 seria:

    let students = [
        student,
        john
    ]
*/

// outra forma seria:

students[1] = john

console.log(students[1])

/*      9 - Sem rodar o código abaixo, responda qual é a resposta do console e por que?
    
    console.log(a)
    var a = 1

    R - a resposta seria undefined, pois a variável var é GLOBAL, e seria declarada, porém o console não receberia seu valor 1, por causa do Hoisting

*/

console.log(a)
var a = 1



