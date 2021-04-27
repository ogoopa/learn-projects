/* 
    TRANSFORMAR NOTAS ESCOLARES

    Crie um algoritmo que transforme as notas do sistema numérico para sistema em notas em caracteres tipo A B C

    - de 90 pra cima - A
    - entre 80 e 89 - B
    - entre 70 e 79 - C
    - entre 60 e 69 - D
    - menor que 60 - F
*/

let nota = 79.8

function getNota(nota) {
    let notaA = nota >= 90 && nota <= 100
    let notaB = nota >= 80 && nota < 90
    let notaC = nota >= 70 && nota < 80
    let notaD = nota >= 60 && nota < 70
    let notaF = nota < 60 && nota >= 0
    let notaFinal

    if(notaA) {
        notaFinal = 'A'
    } else if(notaB) {
        notaFinal = 'B'
    } else if(notaC) {
        notaFinal = 'C'
    } else if(notaD) {
        cnotaFinal = 'D'
    } else if(notaF) {
        notaFinal = 'F'
    } else {
        notaFinal = 'nota inválida'
    }

    return notaFinal
}

console.log(getNota(101))
console.log(getNota(75))
console.log(getNota(-10))
console.log(getNota(88))
console.log(getNota(22))
console.log(getNota(99))