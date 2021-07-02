// global também do node
console.log(process.argv)

// pelo terminal é possível inserir informações no array process, através do seguinte comando:
// exemplo: node process Gustavo Parizi
// o retorno considerará as palavras Gustavo e Parizi como itens do Array argv.
// pelo seguinte comando, é possível capturar esses itens:

const firstName = process.argv[2];
const lastName = process.argv[3];

console.log(`seu nome é ${firstName} ${lastName}`)  