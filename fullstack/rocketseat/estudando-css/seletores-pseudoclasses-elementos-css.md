# Seletores

conecta um elemento HTML com o CSS

* Tipos

    - Element Selector - seletor do elemento;
    - ID Selector - cada ID deve ser único: #id {};
    - Class Selector - elementos que contem um atributo class: .class {};
    - Attribute Selector - elemento que tenha um atributo específico: [title] {};
    - Pseudo-class Selector - elementos em um estao específico: p:hover {};

# Multiplos Elementos

Você pode selecionar multiplos elementos e aplicar alguma regra css para todos eles.
Usamos uma separação por virgula para isso.

h1, p, a {
    color: red;
}

# Combinators

combinadores, pois eles trabalham para buscar e combinar seletores a fim de aplicar uma estilização

# Descendant combinators

* Identificado por um espaço entre os seletores.
* Busca um elemento dentro de outro.

css
    body article h2 {}

# Child combinator

css
    body > ul > li

- identificado pelo sinal > entre dois seletores
- seleciona somente o elemento que é filho direto do pai
- elementos depois do filho direto serão desconsiderados

# Adjacent sibling combinator

- identificado pelo sinal + entre dois seletores
- seleciona somente o elemento do lado direito que é irmão direto na Hierarquia (o primeiro)

h1 + p {}

# General sibling combinator

- identificado pelo sinal ~ entre dois seletores
- seleciona todos os irmãos diretos na hierarquia

h1 ~ p {}

# Pseudo-Classes

- first-child: somente o primeiro filho (considerando a box)
    ul li:first-child {}

- nth-of-type: você escolhe o numero do elemento que quer formatar
    article p:nth-of-type(2) {}

- nth-child: conta os filhos do elemento
    article: nth-child(2) {}

- nth-child-odd-even: 
    nth-child(even) {} : pares
    nth-child(odd) {} : impares

- hover-focus:  
    a:hover {} : altera o formato quando o usuário passa o mouse em cima do elementos
    input:focus {} : altera o formato quando o elemento fica em foco

- disabled-required: atributos
    input:disabled {};
    input:required {};

# Pseudo-elements

Com pseudo-elements nós podemos adicionar elementos HTML pelo próprio CSS

::before
    li::before {
        content: "> "
    }
::after
::first-line

## Referência

- como conseguir ajuda
https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes