// Classes e funções em JavaScript

// criando um objeto

/* const Livro = {
    nome: "React Native",
    editora: "Casa do Código",
    paginas: 185,
    anunciar: function() {
        console.log("A Alura indica o livro " + this.nome + "!")
    }
}

Livro.anunciar() */

// criando uma função, para que seja possível cadastrar 'n' livros

// esta função atua como uma classe, pois classe é o nome que damos para estruturas que usamos para criar objetos

/* const Livro = function(nome, editora, paginas) {
    gNome = nome,
    gEditora = editora,
    gPaginas = paginas

    this.getNome = function() {
        return gNome
    }

    this.getEditora = function() {
        return gEditora
    }

    this.getPaginas = function() {
        return gPaginas
    }
}

const GraphQL = new Livro("GraphQL", "Casa do Codigo", 143)

console.log(GraphQL.getNome())
console.log(GraphQL.getEditora())
console.log(GraphQL.getPaginas()) */

// prototype

/* const nome = "Alura" */

// por baixo dos panos, o JavaScript faz a seguinte ação com a linha de código acima:

/* const temporario = new String(nome) */

// testando

/* console.log(temporario.toString()) */

// o ES6 trouxe a possibilidade de utilizarmos classes no JavaScript

class Livro {
    constructor(nome, editora, paginas) {
        this.nome = nome
        this.editora = editora
        this.paginas = paginas
    }

    anunciarTitulo() { // criando métodos na classe, não é necessário chamar de function
        console.log(`Título: ${this.nome}`)
    }

    descreverTitulo() {
        console.log(`${this.nome} é um livro da editora ${this.editora} e tem ${this.paginas} páginas`)
    }
}

const NodeJS = new Livro("Primeiros passos com NodeJS", "Casa do Codigo", 195)

NodeJS.anunciarTitulo()
NodeJS.descreverTitulo()

console.log(typeof Livro)

// as classes não são hoisted, diferentemente das funções, ou seja, não é possível chamá-las antes de declarar

// açúcar sintático - termo para definir quando uma tecnologia ou parte da linguagem serve para facilitar os programadores que vêm de outras linguagens



// HERANÇA, quando queremos herdar propriedades de um protótipo para outro

class LivroColecao extends Livro {
    constructor(nome, nomeColecao) {
        super(nome)
        this.nomeColecao = nomeColecao
    }

    descreverColecao() {
        console.log(`O livro ${this.nome} faz parte da coleção ${this.nomeColecao}`)
    }
}

const LogicaDeProgramacao = new LivroColecao("Lógica de Programação", "Comece a programar")

LogicaDeProgramacao.descreverColecao()