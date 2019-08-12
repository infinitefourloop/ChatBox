'use strict'

const io = require('socket.io-client')
const socket = io.connect('https://young-springs-61213.herokuapp.com')
const api = require('./api')
const ui = require('./ui')
const getFormFields = require('../../../lib/get-form-fields')
const store = require('../store')

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
      socket.emit('array message', response)
    })
    .then(ui.deleteMessageSuccess)
    .catch(ui.deleteMessageFailure)
}

const onEditMessage = (event) => {
  event.preventDefault()

  const form = event.target
  const formData = getFormFields(form)
  const id = store.currentMessageId
  api.editMessage(formData, id)
    .then(api.indexMessages)
    .then((response) => {
      socket.emit('array message', response)
    })
    .then(ui.updateMessageSuccess)
    .catch(ui.updateMessageFailure)
}

const onGetMessageId = (event) => {
  event.preventDefault()
  store.currentMessageId = $(event.target).data('id')
}

const addHandlers = () => {
  $('html').on('submit', '#messageForm', onSend)
  $('html').on('click', '.delete-message', onDeleteMessage)
  $('html').on('submit', '#update-message', onEditMessage)
  $('html').on('click', '.update-message-icon', onGetMessageId)
  $('html').on('click', '.update-message', ui.updateclear)
  socket.on('chat message', ui.postMessage)
  socket.on('array message', ui.indexMessagesSuccess)
}

module.exports = {
  addHandlers,
  onIndexMessages
}
