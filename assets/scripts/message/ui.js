'use strict'

const showMessagesTemplate = require('../templates/messages-listing.handlebars')
const postMessageTemplate = require('../templates/message-post.handlebars')
const store = require('../store')

const postMessage = function (message) {
  store.data.messages.push(message)
  const object = { message }
  object.current_user_id = store.user._id
  const postMessageHtml = postMessageTemplate(object)
  $('#messages').prepend(postMessageHtml)
}

const indexMessagesSuccess = (data) => {
  store.data = data
  const object = {messages: data.messages.reverse()}
  object.messages.forEach((msg) => {
    msg.current_user_id = store.user._id
  })
  const showMessagesHtml = showMessagesTemplate(object)
  $('#messages').html(showMessagesHtml)
}

const indexMessagesFailure = () => {
  $('#userMessage').text('Failed to load messages.')
  $('#userMessage').removeClass('success')
  $('#userMessage').addClass('failure')
}

const createMessageSuccess = () => {
  $('#userMessage').text('')
  $('form').trigger('reset')
  return false
}

const createMessageFailure = () => {
  $('#userMessage').text('Failed to send a message')
  $('#userMessage').removeClass('success')
  $('#userMessage').addClass('failure')
}

const deleteMessageSuccess = () => {
  $('#userMessage').text('Message deleted!')
  $('#userMessage').removeClass('failure')
  $('#userMessage').addClass('success')
}

const deleteMessageFailure = () => {
  $('#userMessage').text('Failed to delete message. Please try again.')
  $('#userMessage').removeClass('success')
  $('#userMessage').addClass('failure')
}

const updateMessageSuccess = () => {
  $('#updateMessageModal').modal('toggle')
  $('#userMessage').text('Updated message!')
  $('#userMessage').removeClass('failure')
  $('#userMessage').addClass('success')
  $('form').trigger('reset')
}

const updateMessageFailure = () => {
  $('.update-message-message').text('Failed to update message. Please try again.')
  $('.update-message-message').removeClass('success')
  $('.update-message-message').addClass('failure')
  $('form').trigger('reset')
}

const updateClear = () => {
  $('#updateMessage').val('')
  const message = store.data.messages.find(data => data._id === store.currentMessageId)
  $('#updateMessage').val(message.text)
}

module.exports = {
  postMessage,
  indexMessagesSuccess,
  indexMessagesFailure,
  createMessageSuccess,
  createMessageFailure,
  deleteMessageSuccess,
  deleteMessageFailure,
  updateMessageSuccess,
  updateMessageFailure,
  updateClear
}
