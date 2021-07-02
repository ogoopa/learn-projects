const { EventEmitter } = require('events')
const ev = new EventEmitter()
console.log(ev)

/* ouvindo eventos e executando ações para eventos */
ev.on('saySomething', (message) => {
  console.log('eu ouvi você', message)
})

/* disparando um evento */
ev.emit('saySomething', 'Gustavo')
ev.emit('saySomething', '')
ev.emit('saySomething')

/* ouvindo eventos uma única vez */
ev.once('saySomethingOnce', (message) => {
  console.log('eu ouvi você', message)
})

ev.emit('saySomethingOnce', 'Lelê')
ev.emit('saySomethingOnce', 'Gugu')
ev.emit('saySomethingOnce', 'Zozi')