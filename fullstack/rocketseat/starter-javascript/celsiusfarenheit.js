/* 
    CELSIUS TO FAHRENHEIT

    Crie uma função que receba um string em celsius ou fahreheit e faça a transformação de uma unidade para outra

    C = (F - 32) * 5/9
    F = C * 9/5 + 32
*/

//converterGraus('50F')

console.log('Digite o valor que quer converter, em Celsius ou Fahrenheit. Exemplo: 32C, 75F, etc.')

function converterGraus(graus) {
    const celsiusExiste = graus.toUpperCase().includes('C')
    const fahreheitExiste = graus.toUpperCase().includes('F')

    // fluxo de erro    
    if (!celsiusExiste && !fahreheitExiste) {
        throw new Error('Grau não identificado')
    }

    // fluxo ideal, F -> C
    let grauAtualizado = Number(graus.toUpperCase().replace("F",""));
    let formula = (farereheit) => (farereheit - 32) * 5/9
    let grauSigno = 'C'

    // fluxo alterativo C -> F
    if (celsiusExiste) {
        grauAtualizado = Number(graus.toUpperCase().replace("C",""));
        formula = (celsius) => celsius * 9/5 + 32
        grauSigno = 'F'
    }

    return formula(grauAtualizado) + grauSigno
}

try {
    console.log(converterGraus('200c'))
    //converterGraus('50F')
    //converterGraus('50Z')
} catch(error) {
    console.log(error.message)
}