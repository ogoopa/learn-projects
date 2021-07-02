// módulos nativos do node
// para a função require, sempre é necessário indicar um argumento (módulos). como exemplo, iremos utilizar o path;
// https://nodejs.org/dist/latest-v14.x/docs/api/path.html

const path = require('path')
console.log(path.basename(__filename))

// meus módulos (linkando um javascript com outro através do exports)
const myModule = require('./exports')
console.log(myModule)

