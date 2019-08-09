'use strict'

const io = require('socket.io-client')
const socket = io.connect('localhost:4741')
const api = require('./api')
const ui = require('./ui')
const getFormFields = require('../../../lib/get-form-fields')

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

const onDeleteMessage = (event) => {
  event.preventDefault()
  const id = $(event.target).data('id')
  api.deleteMessage(id)
    .then(api.indexMessages)
    .then((response) => {
      socket.emit('delete message', response)
    })
    .catch(ui.deleteMessageFailure)
}

const onEditMessage = (event) => {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  const id = $(event.target).data('id')
  api.editMessage(formData, id)
    .then(api.indexMessages)
    .then(ui.indexMessagesSuccess)
    .catch(ui.editMessageFailure)
}

const addHandlers = () => {
  $('html').on('submit', '#messageForm', onSend)
  socket.on('chat message', ui.postMessage)
  $('html').on('click', '.delete-message', onDeleteMessage)
  socket.on('delete message', ui.indexMessagesSuccess)
}

module.exports = {
  addHandlers,
  onIndexMessages
}
