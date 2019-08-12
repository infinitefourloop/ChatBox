'use strict'

const showMessagesTemplate = require('../templates/messages-listing.handlebars')
const postMessageTemplate = require('../templates/message-post.handlebars')
const store = require('../store')

const postMessage = function (message) {
  store.data.messages.push(message)
  const postMessageHtml = postMessageTemplate({ message: message })
  $('#messages').prepend(postMessageHtml)
}

const indexMessagesSuccess = (data) => {
  store.data = data
  const showMessagesHtml = showMessagesTemplate({ messages: data.messages.reverse() })
  $('#messages').html(showMessagesHtml)
}

const indexMessagesFailure = () => {
  $('#userMessage').text('Unable to get all messages!')
  $('#userMessage').removeClass('success')
  $('#userMessage').addClass('failure')
}

const createMessageSuccess = () => {
  $('#userMessage').text('')
  $('form').trigger('reset')
  return false
}

const createMessageFailure = () => {
  $('#userMessage').text('Unable to create message!')
  $('#userMessage').removeClass('success')
  $('#userMessage').addClass('failure')
}

const deleteMessageSuccess = () => {
  $('#userMessage').text('Deleted message successfully!')
  $('#userMessage').removeClass('failure')
  $('#userMessage').addClass('success')
}

const deleteMessageFailure = () => {
  $('#userMessage').text('Failed to delete message. Please try again')
  $('#userMessage').removeClass('success')
  $('#userMessage').addClass('failure')
}

const updateMessageSuccess = () => {
  $('#updateMessageModal').modal('toggle')
  $('#userMessage').text('Updated message successfully!')
  $('#userMessage').removeClass('failure')
  $('#userMessage').addClass('success')
  $('form').trigger('reset')
}

const updateMessageFailure = () => {
  $('.update-message-message').text('Failed to update message. Please try again!')
  $('.update-message-message').removeClass('success')
  $('.update-message-message').addClass('failure')
  $('form').trigger('reset')
}

const updateclear = () => {
  $('#updateMessage').val('')
  const message = store.data.messages.find(data => data._id === store.currentMessageId)
  console.log(message)
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
  updateclear
}
