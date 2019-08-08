'use strict'

const postMessage = function (msg) {
  $('#messages').append($('<li>').text(msg))
}

const createMessageSuccess = () => {
  $('#m').val('')
  return false
}

const createMessageFailure = () => {
}

module.exports = {
  postMessage,
  createMessageSuccess,
  createMessageFailure
}
