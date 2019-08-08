'use strict'

const io = require('socket.io-client')
const socket = io.connect('localhost:4741')
const api = require('./api')
const ui = require('./ui')

const onSend = function (event) {
  event.preventDefault() // prevents page reloading

  const msg = $('#m').val()
  api.createMessage(msg)
    .then((response) => {
      socket.emit('chat message', response.message)
    })
    .then(ui.createMessageSuccess)
    .catch(ui.createMessageFailure)
}

const onIndexMessages = () => {
  api.indexMessages()
    .then(ui.indexMessagesSuccess)
    .catch(ui.indexMessagesFailure)
}

const addHandlers = () => {
  $('html').on('submit', '#messageForm', onSend)
  socket.on('chat message', ui.postMessage)
}

module.exports = {
  addHandlers,
  onIndexMessages
}
