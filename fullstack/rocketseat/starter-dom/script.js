// getElementById() - busca o elemento HTML pelo id - element

const elementoId = document.getElementById('blog-title');
console.log(elementoId)

// getElementsByClassName() - busca o elemento HTML pela class - HTML Collection


try {

    const elementoClass = document.getElementsByClassName('one');
    console.log(elementoClass)
    

} catch (e) {
    console.log(e)
}

console.log('após a função de erro')

// getElementByTagName() - busca o elemento HTML pela tag - HTML Collection

const elementoTag = document.getElementsByTagName('meta');
console.log(elementoTag)

// querySelector() - busca o elemento pelo seletor - element

const elementoSelector = document.querySelector('[src]');
console.log(elementoSelector)

// querySelectorAll() - cria uma Node List (lista de nós) - conceito de árvore e nós do DOM - é possível fazer um foreach

const elementoSelectorAll = document.querySelectorAll('.one');
console.log(elementoSelectorAll)


// manipulando conteúdo - textContent
const elementoTextContent = document.querySelector('h1');
elementoTextContent.textContent += " Olá Devs!"

// manipulando conteúdo - innerText - irá substituir o texto interno do elemento

// manipulando conteúdo - innerHTML

const elementoInnerHTML = document.querySelector('h1')
elementoInnerHTML.innerHTML = "Olá Devs! <small>!!!</small>"

// manipulando conteúdo - value - (input - tag html para receber valores)

const elementoValue = document.querySelector('input')
console.log(elementoValue.value)

// o value serve tanto para pegar valor (conforme console.log acima) quanto para atribuir valor, conforme abaixo

elementoValue.value = "outro valor"

// manipulando atributos

try {

    const header = document.querySelector('header')
    header.setAttribute('id', 'header')

} catch (e) {
    console.log(e)
}


const headerId = document.querySelector('#header')
console.log(headerId.getAttribute('id'))

// remover atributos

header.removeAttribute('class')

// alterando estilos
const elementoEstilo = document.querySelector('body')
elementoEstilo.style.backgroundColor = "#F9F3D2"

console.log(elementoEstilo.style.backgroundColor)

// alterando estilos - classList

const elementoClassList = document.querySelector('body')

elementoClassList.classList.add('active','green')

console.log(elementoClassList.classList)

elementoClassList.classList.remove('active')

elementoClassList.classList.toggle('active') // o toggle funciona como um  interruptor, se estiver adicionado ele remove e vice versa

// navegando pelos elementos
// geralmente a opção que contém Element (parentNode => parentElement; nextSibling -> nextElementSibling) não considera os ESPAÇOS entre os códigos, """a identação""", a outra opção considera e imprime o espaço como elemento

// parentNode parentElement - Nó pai e Elemento pai

const body = document.querySelector('body')
console.log(body.parentElement)

// childNodes children - elementos filhos

const el = document.querySelector('body')
console.log(el.childNodes)
console.log(el.children)

// firstChild firstElementChild
console.log(el.firstChild)
console.log(el.firstElementChild)

// lastChild lastElementChild
console.log(el.lastChild)
console.log(el.lastElementChild)

// navegando pelos elemento irmãos
// nextSibling nextElementSibling
const el2 = document.querySelector('header')

// previousSibling previousElementSibling
console.log(el2.nextSibling)
console.log(el2.nextElementSibling)

// criando e adicionando elementos no HTML
// o JS cria através do dom o elemento na memória, ele não aparece no código HTML


// createElement
const div = document.createElement('div');
div.innerText = "Oi Desenvs!"

// append prepend
const bodyTwo = document.querySelector('body')
bodyTwo.append(div) // adiciona após
bodyTwo.prepend(div) // adiciona antes

// adicionando elementos no meio do código HTML
// insertBefore (não existe o insertAfter)

const bodyThree = document.querySelector('body')
const script = bodyThree.querySelector('script')
bodyThree.insertBefore(div, script)

// se for necessário inserir após - simulando um insertAfter

const bodyFour = document.querySelector('body')
const header = bodyFour.querySelector('header')
bodyFour.insertBefore(div, header.nextElementSibling)

// Eventos (on - são muitos eventos: onclick, ondbclick, ondrag, etc)
function print() {
    console.log('print')
}



// Eventos de Teclado
const inputKeyboard = document.querySelector('input')
inputKeyboard.onkeydown = function() { //quando apertar qualquer tecla
    console.log('rodei down')
}

inputKeyboard.onkeyup = function() { //quando terminar de soltar a tecla
    console.log('rodei up')
}


inputKeyboard.onkeypress = function() { //quando pressionei a tecla
    console.log('rodei press')
}

// adicionando Eventos via JS

const h1 = document.querySelector('h1');

h1.addEventListener('click', print) // "adicionar um ouvidor de eventos"

function print() {
    console.log('print')
}

// argumento event

const input = document.querySelector('input')

input.onclick = function(event) {
    console.log(event.currentTarget.value)
}