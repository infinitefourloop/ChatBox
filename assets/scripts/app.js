'use strict'

const userEvents = require('./user/events.js')
const io = require('socket.io-client')
// const socketEvents = require('./socket/events.js')

$(() => {
  userEvents.addHandlers()
  // socketEvents.addHandlers()
  const socket = io.connect('localhost:4741')
  $('form').submit(function (e) {
    e.preventDefault() // prevents page reloading
    socket.emit('chat message', $('#m').val())
    console.log($('#m').val())
    $('#m').val('')
    return false
  })
  socket.on('chat message', function (msg) {
    $('#messages').append($('<li>').text(msg))
  })
})
