'use strict'

const postMessage = function (msg) {
  $('#messages').append($('<li>').text(msg))
}

const createMessageSucess = () => {
  $('#m').val('')
  return false
}

module.exports = {
  postMessage,
  createMessageSucess
}
