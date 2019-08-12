'use strict'

const getFormFields = require('../../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')
const uiMessages = require('../message/ui')
const messageEvents = require('../message/events')
const store = require('../store')
const io = require('socket.io-client')
let socket

const onSignUp = event => {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  store.save = formData
  api.signUp(formData)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
}

const onSignIn = event => {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  api.signIn(formData)
    .then(ui.signInSuccess)
    .then(function () {
      socket = io.connect('https://young-springs-61213.herokuapp.com')
      socket.on('chat message', uiMessages.postMessage)
      socket.on('array message', uiMessages.indexMessagesSuccess)
    })
    .then(messageEvents.onIndexMessages)
    .catch(ui.signInFailure)
}

// Guest for quick testing
// const onGuest = event => {
//   event.preventDefault()
//   const guestInfo = {
//     'credentials': {
//       'email': 'el@el',
//       'password': 'e'
//     }
//   }
//   api.signIn(guestInfo)
//     .then(ui.signInSuccess)
//     .then(messageEvents.onIndexMessages)
//     .catch(ui.signInFailure)
// }
//
// const onGuest2 = event => {
//   event.preventDefault()
//   const guestInfo = {
//     'credentials': {
//       'email': 'ab@ab',
//       'password': 'ab'
//     }
//   }
//   api.signIn(guestInfo)
//     .then(ui.signInSuccess)
//     .then(messageEvents.onIndexMessages)
//     .catch(ui.signInFailure)
// }

const onChangePassword = event => {
  event.preventDefault()
  const formData = getFormFields(event.target)
  api.changePassword(formData)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordFailure)
}

const onSignOut = () => {
  event.preventDefault()
  api.signOut()
    .then(ui.signOutSuccess)
    .catch(ui.signOutFailure)
}

const getEmail = event => {
  event.preventDefault()
  $('form').trigger('reset')
  $('#staticEmail').val(store.user.email)
}

const clear = () => {
  $('#userMessage').text('')
  $('.password-message').text('')
  $('.update-message-message').text('')
}

const addHandlers = () => {
  $('html').on('submit', '#sign-in', onSignIn)
  $('html').on('submit', '#sign-up', onSignUp)
  // $('html').on('click', '#guest', onGuest)
  // $('html').on('click', '#guest2', onGuest2)
  $('html').on('click', '#pwchange', getEmail)
  $('html').on('submit', '#change-password', onChangePassword)
  $('html').on('click', '#sign-out', onSignOut)
  $('html').on('click', '.dropdown', clear)
}

module.exports = {
  addHandlers,
  socket
}
