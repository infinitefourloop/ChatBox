'use strict'

const store = require('../store')
const api = require('./api')
const messageEvents = require('../message/events')
const showChatRoom = require('../templates/chat-room.handlebars')
const showSigninHeader = require('../templates/signin-header.handlebars')
const showAuth = require('../templates/auth.handlebars')
const showSignoutHeader = require('../templates/signout-header.handlebars')
// const showUserMessage = require('../templates/user-message.handlebars')
// const showAccount = require('.//templates/account.handlebars')

const successMessage = message => {
  $('#userMessage').text(message)
  $('form').trigger('reset')
}

const failureMessage = message => {
  $('#userMessage').text(message)
  $('form').trigger('reset')
}

const signUpSuccess = responseData => {
  successMessage('Sign up success')
  $('#sign-up').addClass('hide')
  $('#guest').addClass('hide')
  api.signIn(store.save)
    .then(signInSuccess)
    .then(messageEvents.onIndexMessages)
}

const signUpFailure = () => {
  failureMessage('Sign up failed')
}

const signInSuccess = (responseData) => {
  store.user = responseData.user
  const chatRoom = showChatRoom()
  const signinHeader = showSigninHeader()
  $('header').html(signinHeader)
  successMessage(`Welcome ${store.user.email}!`)
  $('form').trigger('reset')
  $('main').html(chatRoom)
}

const signInFailure = () => {
  failureMessage('Wrong email or password')
}

const changePasswordSuccess = (responseData) => {
  successMessage('Password changed successfully')
}

const changePasswordFailure = () => {
  failureMessage('Password change failed')
}

const signOutSuccess = () => {
  successMessage('Successfully signed out.')
  const auth = showAuth()
  const signoutHeader = showSignoutHeader()
  $('main').html(auth)
  $('header').html(signoutHeader)
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
