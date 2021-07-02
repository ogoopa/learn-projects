/* Herdando o EventEmitter com a função inherits */
const { inherits } = require('util')
const { EventEmitter } = require('events')

function Personagem(nome) {
  this.nome = nome
}

inherits(Personagem, EventEmitter)

const chapolin = new Personagem('Chapolin Colorado');
chapolin.on('help', () => console.log(`Eu! O ${chapolin.nome}!!!`))

console.log('Oh! E agora, quem poderá nos defender?')
chapolin.emit('help')