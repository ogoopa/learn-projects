/* Lista agência de Turismo */

console.log(`\nTrabalhando com Condicionais`);
const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`,
    `Curitiba`,
);

const idadeComprador = 19;
const estaAcompanhada = false;
let temPassagemComprada = false;
const destino = "Maceió"

console.log("\n Destinos possíveis: ")
console.log(listaDeDestinos);

const podeComprar = idadeComprador >= 18 || estaAcompanhada == true;

let contador = 0;
let destinoExiste = false;

while(contador < 3) {
    
    if (listaDeDestinos[contador] == destino) {
        console.log("Destino existe");
        destinoExiste = true;
        break;
    }
    contador+=1;
}

console.log("Destino existe: ", destinoExiste)

/* FOR

outro exemplo de laço de repetição, a estrutura é dividida em três partes:

for (declara contador ; condição; incremento final) {
};

i = variável mais comum para o for (boas práticas)
*/

if (podeComprar && destinoExiste) {
    console.log("Boa viagem!");
} else {
    console.log("Desculpe, tivemos um erro!");
}

for (let i = 0; i <3; i++) {
    if (listaDeDestinos[contador] == destino) {
        console.log("Destino existe");
        destinoExiste = true;
        //break;
    }
}