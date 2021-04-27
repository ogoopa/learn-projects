/* 
    Sistema de gastos familiares

    Crie um objeto que possuirá duas propriedades, ambas do tipo array

        - receitas: []
        - despesas: []

    Agora, crie uma função que irá calcular o total de receitas e despesas e irá mostrar uma mensagem se a família está com saldo positivo ou negativo, segundo o valor de saldo
*/


let familia = {
    receitas: [1900, 3200, 4200, 2500],
    despesas: [600, 800, 1200, 500, 1000, 400, 400, 440, 220, 3000]
}

function soma(familiaarray) {
    let total = 0;
    for(let valor of familiaarray)
        total += valor
    return total
}

function calcularBalanco() {
    const calcularReceitas = soma(familia.receitas)
    const calcularDespesas = soma(familia.despesas)
    const total = calcularReceitas - calcularDespesas

    const estaOk = total >= 0
    
    let textoBalanco = 'negativo'

    if (estaOk) {
        textoBalanco = 'positivo'
    }

    console.log(`seu saldo é ${textoBalanco}: $ ${total}`)
}

calcularBalanco()