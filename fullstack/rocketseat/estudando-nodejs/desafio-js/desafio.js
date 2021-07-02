/* 
  Crie 2 arquivos javascript

  - o primeiro irá exportar uma função chamada getFlag()
  - que receberá um argumento do tipo string
  - essa função deverá buscar dentro do array process.argv a flag desejada, que é a String e retornar o valor da flag
  
  - o segundo irá importar a função e passar a flag desejada
  - iremos rodar no terminal o segundo arquivo passando as flags --name e --greeting para que seja impresso no terminal a saudação e o nome da pessoa;

*/

/* console.log(process.argv) */

function getFlag() {
  const nameFlag = process.argv[2 + 1];
  const greetingFlag = process.argv[4 + 1];

  return (`${nameFlag}: ${greetingFlag}`);
}

const GetFlag = getFlag();

module.exports = GetFlag;

console.log(GetFlag)

/* const array = ["a", "b", "c", "d", "e", "f"]

console.log(array[1 + 1])
 */