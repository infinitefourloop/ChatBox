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
  $('form').trigger('reset')
  return false
}

const createMessageFailure = () => {
}

const deleteMessageSuccess = () => {

}

const deleteMessageFailure = () => {

}

module.exports = {
  postMessage,
  indexMessagesSuccess,
  indexMessagesFailure,
  createMessageSuccess,
  createMessageFailure,
  deleteMessageSuccess,
  deleteMessageFailure
}
