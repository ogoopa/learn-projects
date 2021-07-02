// setTimeout irá rodar uma função depois de X milissegundos (ms)

const timeOut = 3000;
const finished = () => console.log('done!')

setTimeout(finished, timeOut)
console.log('Mostrar')