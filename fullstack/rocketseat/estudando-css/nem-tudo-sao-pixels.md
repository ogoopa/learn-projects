# Valores e unidades de medidas

* cada propriedade possui valores `property: value`
* estudo constante a fim de entender as propriedades e seus valores

# Prática

* como conhecer e estudar os valores de documetação
    <color> <length>
* os termos podem variar, `values` ou `data types`

acesse o MDN para tirar duvidas: https://developer.mozilla.org/pt-BR/

# Tipos Numéricos

* <integer>     número inteiro com -10 ou 233
* <number>      número decimal com -2.4, 64 ou 0.234
* <dimension>   é um <number> com uma unidade junto: 90deg, 2s, 8px

# Unidades columns

* <length>          representa um valor de distância: px, em, vw
* <angle>           representa um ângulo: deg, rad, turn
* <time>            representa unidade de tempo: s, ms
* <resolution>      representa resoluções para dispositivos: dpi

# Distancias absolutas <length>

São fixas e não alteram o seu valor

Unidade     Nome                    Equivalência
cm          Centímetros             1cm = 96px/2.54
in          Inches (polegadas)      1in = 2.54cm = 96px
px          Pixels                  1/96th of 1in

* o mais comum e mais utilizado é o **px**

# Distâncias relativas

São relativas a algum outro valor, pode ser o elemento pai, ou root, ou o tamanho da tela.

* Benefícios: Maior adaptação aos diferentes tipos de tela;

Unidade     Relativo a
em          tamanho da font do pai
rem         tamanho da font do elemento raiz (root/html)
vw          1% da viewport width    <!-- a viewport é o tamanho da tela -->
vh          1/ da viewport height   <!-- a viewport é o tamanho da tela -->

para declarar um rem no css

    :root {
        font-size: 18px;
    }

    ou

    html {
        font-size: 18px;
    }

# Porcentagens

* Em muitos casos é tratado da mesma maneira que a distância <length>
* Será relativo sempre a algum valor, geralmente o elemento pai, ou a raiz (root, html)

# Posições

<position>

Representa um conjunto de coordenadas 2D;
- top, right, bottom, left e center;

* Usado para alguns tipos de propriedades
* Não confundir com a propriedade `position`

EX:
    .box {
        height: 300px;
        width: 400px;
        background-image: url(http://source.unsplash.com/random);
        background-repeat: no-repeat;
        background-position: center;
    }

# funções

Em programação, funções são reconhecidas por causar um reaproveitamento de código;

* rgb(255, 255, 110)
* hsl()
* url()
* calc(100% - 40px) <!-- neste caso, a porcentagem sempre precisará de uma referencia -->

# Strings e Identificadores

* Strings: texto envolto em aspas;
ex:
    .box::after {
        content: "Aqui vem a mensagem"
    }

* Identificadores: red, black, gold;