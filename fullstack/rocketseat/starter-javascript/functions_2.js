
// function expression
// function anonymous
// parameters
// number1 e number2 são parametros (parameters)

// 2 e 3 são argumentos

let num1 = 33
let num2 = 21

const sum = function(number1, number2) {
    let total = number1 + number2 // number1 e number2 são parametros (parameters)
    return total
}

console.log(`a soma é ${sum(num1, num2)}`)

// outro exemplo lúdico de função

// esta função representa um liquidificador

function fazerSuco(fruta1, fruta2) {
    return 'suco de ' + fruta1 + fruta2
}

const copo = fazerSuco('banana', 'maçã')

console.log(copo)

// function scope

// exemplo lúdico função criar um pensamento

let subject = 'create video'

function createThink(subject) {
    subject = 'study'
    return subject
}

console.log(createThink(subject))
console.log(subject)

// function hoisting

// para funções, o var não sofre elevação, o hoisting irá apenas acontecer se NÃO for declarado o tipo de variável (var, const, let)

// arrow function (seta =>)
// geralmente se atribui para const

const sayMyName = (name) => {
    console.log(name)
}

sayMyName('Goopa')

// callback function

function sayMyName2(name2) {
    console.log('antes de executar a função callback')

    name2()

    console.log('depois de executar a callback')
}

sayMyName2(
    () => {
        console.log('estou em uma callback')
    }
)

/* Function() CONSTRUCTOR

    - expressão new
    - criar um novo objeto
    - this keyword

*/

function Person(name3) {
    this.name3 = name3
    this.walk = function() {
        return this.name3 + " está andando"
    }
}

const guma = new Person("Guma")
const joao = new Person("João")
console.log(guma.walk())
console.log(joao.walk())