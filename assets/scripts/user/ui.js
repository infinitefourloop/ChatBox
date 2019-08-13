'use strict'

const store = require('../store')
const api = require('./api')
const messageEvents = require('../message/events')
const messagesUi = require('../message/ui')
const showChatRoom = require('../templates/chat-room.handlebars')
const showHomeTemplate = require('../templates/home.handlebars')
const io = require('socket.io-client')
let socket

const successMessage = message => {
  $('#userMessage').text(message)
  $('#userMessage').removeClass('failure')
  $('#userMessage').addClass('success')
  $('form').trigger('reset')
}

const failureMessage = message => {
  $('#userMessage').text(message)
  $('#userMessage').removeClass('success')
  $('#userMessage').addClass('failure')
  $('form').trigger('reset')
}

const signUpSuccess = responseData => {
  api.signIn(store.save)
    .then(signInSuccess)
    .then(function () {
      socket = io.connect('https://young-springs-61213.herokuapp.com')
      socket.on('chat message', messagesUi.postMessage)
      socket.on('array message', messagesUi.indexMessagesSuccess)
    })
    .then(messageEvents.onIndexMessages)
    .catch(signUpFailure)
}

const signUpFailure = () => {
  failureMessage('Sign up failed. Please try again.')
}

const signInSuccess = (responseData) => {
  store.user = responseData.user
  $('#sign-in').addClass('hide')
  $('.dropdown').removeClass('hide')
  $('.main').html(showChatRoom)
  successMessage(`Welcome to ChatBox, ${store.user.username}!`)
}

const signInFailure = () => {
  failureMessage('Failed to sign in. Please try again.')
}

const changePasswordSuccess = (responseData) => {
  $('#staticEmail').val(store.user.email)
  $('.password-message').text('Password changed!')
  $('.password-message').removeClass('failure')
  $('.password-message').addClass('success')
  $('form').trigger('reset')
  $('#staticEmail').val(store.user.email)
}

const changePasswordFailure = () => {
  $('#staticEmail').val(store.user.email)
  $('.password-message').text('Password changed failed. Please try again.')
  $('.password-message').removeClass('success')
  $('.password-message').addClass('failure')
  $('form').trigger('reset')
  $('#staticEmail').val(store.user.email)
}

const signOutSuccess = () => {
  $('.main').html(showHomeTemplate)
  $('#sign-in').removeClass('hide')
  $('.dropdown').addClass('hide')
  successMessage('See you again soon!')
}

const signOutFailure = () => {
  failureMessage('Sign Out Failure')
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure,
  signOutSuccess,
  signOutFailure
}
