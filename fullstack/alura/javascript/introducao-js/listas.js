/* Lista agência de Turismo */

console.log(`Trabalhando com Listas`);

const salvador = `Salvador`;
const saoPaulo = `São Paulo`;
const rioDeJaneiro = `Rio de Janeiro`;

console.log("Destinos possíveis:");
console.log(salvador, saoPaulo, rioDeJaneiro);

/* Trabalhando com ARRAYS */

const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`,
);

// adicionando um item na lista, após ela ser declarada

listaDeDestinos.push(`Curitiba`);

// removendo um item da lista

listaDeDestinos.splice(1, 1);


console.log(listaDeDestinos); // imprimir a lista
console.log(listaDeDestinos[1]); // imprimir elemento específico da lista
console.log(listaDeDestinos[1], listaDeDestinos[0]); 