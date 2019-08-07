'use strict'

const store = require('../store')
const api = require('./api')

const successMessage = message => {
  $('#message').text(message)
  $('form').trigger('reset')
}

const failureMessage = message => {
  $('#message').text(message)
  $('form').trigger('reset')
}

const signUpSuccess = responseData => {
  successMessage('Sign up success')
  $('#sign-up').addClass('hide')
  $('#guest').addClass('hide')
  api.signIn(store.save)
    .then(signInSuccess)
}

const signUpFailure = () => {
  failureMessage('Sign up failed')
}

const signInSuccess = (responseData) => {
  store.user = responseData.user
  successMessage(`Welcome ${store.user.email}!`)
  $('#sign-out').removeClass('hide')
  $('#change-password-button').removeClass('hide')
  $('#sign-up').addClass('hide')
  $('#sign-in').addClass('hide')
  $('#guest').addClass('hide')
  $('form').trigger('reset')
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
  $('#sign-out').addClass('hide')
  $('#sign-up').removeClass('hide')
  $('#sign-in').removeClass('hide')
  $('#guest').removeClass('hide')
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
