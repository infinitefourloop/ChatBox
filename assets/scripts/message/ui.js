'use strict'
const showMessagesTemplate = require('../templates/messages-listing.handlebars')

const postMessage = function (msg) {
  $('#messages').append($('<li>').text(msg))
}

const indexMessagesSuccess = (data) => {
  const showMessagesHtml = showMessagesTemplate({ messages: data.messages })
  $('#messages').html(showMessagesHtml)
}

const indexMessagesFailure = () => {
}

const createMessageSuccess = () => {
  $('#m').val('')
  return false
}

const createMessageFailure = () => {
}

module.exports = {
  postMessage,
  indexMessagesSuccess,
  indexMessagesFailure,
  createMessageSuccess,
  createMessageFailure
}
