/* Lista agência de Turismo */

console.log(`Trabalhando com Condicionais`);

const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`,
    `Curitiba`,
);

const idadeComprador = 19;
const estaAcompanhada = true;
const temPassagemComprada = true;

/*

if(idadeComprador >= 18){
    console.log("Comprador maior de idade");
    listaDeDestinos.splice(1, 1);
} else{
    // a pessoa é menor de idade
    if(estaAcompanhada == true){
        console.log("Comprador está acompanhado");
        listaDeDestinos.splice(1, 1); 
    }
    console.log("Não é maior de idade e não posso vender")
};

console.log("Destinos possíveis:");
console.log(listaDeDestinos);

*/

/* outra forma de codificar o if */

// if(idadeComprador >= 18){
//     console.log("Comprador maior de idade");
//     listaDeDestinos.splice(1, 1);
// } else if(estaAcompanhada == true){
//         console.log("Comprador está acompanhado");
//         listaDeDestinos.splice(1, 1); 
// } else {
//     console.log("Não é maior de idade e não posso vender");
// };


if (idadeComprador >= 18 || estaAcompanhada == true) {
    console.log("Boa Viagem!");
    listaDeDestinos.splice(1, 1);
} else {
    console.log("Não é maior de idade e não posso vender");
};

console.log("Embarque: \n\n")
if (idadeComprador >= 18 && temPassagemComprada){
    console.log("Boa viagem!");
} else {
    console.log("Você não pode embarcar.")
}

console.log(listaDeDestinos);
