// Control Flow

// se estiver sujo
console.log('lavar o copo')

// se não estiver sujo
console.log('servir café')

// if e else
// sempre utilizar dentro de blocos {}

let temperatura1 = 36.5

if(temperatura1 >= 37) {
    console.log('Febre')
} else { // o uso do else não é obrigatório
    console.log('Saudável')
}

// outro exemplo: if else if

let temperatura2 = 38.1

if(temperatura2 >= 37.5) {
    console.log('Febre alta')
} else if(temperatura2 < 37.5 && temperatura2 >=37) { 
    console.log('Febre moderada')
} else {
    console.log('Saudável')
}

// exemplo 3: if ... else

let temperatura3 = 36.9
let highTemperatura = temperatura3 >= 37.5
let mediumTemperatura = temperatura3 <= 37.5 && temperatura3 >= 37

if(highTemperatura) {
    console.log('Febre alta')
} else if(mediumTemperatura) {
    console.log('Febre moderada')
} else {
    console.log('Saudável')
}

// switch

let expression = 'a'

switch(expression) {
    case 'a': 
        // codigo
        console.log('a')
        break
    case 'b':
        // codigo para b
        console.log('b')
        break
    default:
        console.log('default')
        break
}

// exemplo de switch - calculadora simples

function calculate(numero1, operator, numero2) {
    let result

    switch (operator) {
        case '+':
            result = numero1 + numero2
            break;
        case '-':
            result = numero1 - numero2
            break;
        case '*':
            result = numero1 * numero2
            break;   
        case '/':
            result = numero1 / numero2
            break; 
        default:
            console.log('nao implementado')
            break;
    }

    return result
}

console.log(calculate(4 ,'*', 7))

// throw - lançar

function digaMeuNome(meunome = '') {
    if (meunome === '') {
        throw 'Nome é obrigatório'
    }

    console.log('depois do erro')
}

// try ... catch - tentar ... pegar
try {
    digaMeuNome()
} catch(e) {
    console.log(e)
}

console.log('após a função de erro')