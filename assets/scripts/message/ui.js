'use strict'
const showMessagesTemplate = require('../templates/messages-listing.handlebars')
const postMessageTemplate = require('../templates/message-post.handlebars')

const postMessage = function (message) {
  const postMessageHtml = postMessageTemplate({ message: message })
  $('#messages').append(postMessageHtml)
}

const indexMessagesSuccess = (data) => {
  const showMessagesHtml = showMessagesTemplate({ messages: data.messages })
  $('#messages').html(showMessagesHtml)
}

const indexMessagesFailure = () => {
}

const createMessageSuccess = () => {
  $('#userMessage').text('')
  $('form').trigger('reset')
  return false
}

const createMessageFailure = () => {
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
