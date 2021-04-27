
// Estrutura de repetição

// for - para
// for(variável; estrutura de repetição; expressão final) {}

for(let i = 0; i < 10; i++) {
    console.log(i)
}

for(let j = 100; j > 10; j--) {
    console.log(j)
}

// break, para a execução do loop

for(let k = 20; k > 0; k--) {
    if(k === 5) {
        break;
    }

    console.log(k)
}

// continue, pula a execução do momento

for(let l = 20; l > 0; l--) {
    if(l === 5) {
        continue;
    }

    console.log(l)
}


// while - enquanto

let m = 0

while(m < 10) {
    console.log(m)
    m++;
}

// for of

let name = 'Gustavo'
let names = ['João', 'Paulo', 'Pedro']

for(let caractere of name) {
    console.log(caractere)
}

// for in

let person = {
    nome: 'Letícia',
    idade: 26,
    peso: 55
}

for(let propriedade in person) {
    console.log(propriedade)
    console.log(person[propriedade])
}