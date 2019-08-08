'use strict'

const getFormFields = require('../../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')
const messageEvents = require('../message/events')
const store = require('../store')
const showAccount = require('../templates/account.handlebars')
const showChatRoom = require('../templates/chat-room.handlebars')

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
    .then(messageEvents.onIndexMessages)
    .catch(ui.signInFailure)
}

const onGuest = event => {
  event.preventDefault()
  const guestInfo = {
    'credentials': {
      'email': 'e@e',
      'password': 'e'
    }
  }
  api.signIn(guestInfo)
    .then(ui.signInSuccess)
    .then(messageEvents.onIndexMessages)
    .catch(ui.signInFailure)
}

const onGuest2 = event => {
  event.preventDefault()
  const guestInfo = {
    'credentials': {
      'email': 'b@b',
      'password': 'b'
    }
  }
  api.signIn(guestInfo)
    .then(ui.signInSuccess)
    .then(messageEvents.onIndexMessages)
    .catch(ui.signInFailure)
}

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

const onAccountClick = event => {
  event.preventDefault()
  const accountPage = showAccount()
  $('main').html(accountPage)
}

const onHomeClick = event => {
  event.preventDefault()
  const chatRoom = showChatRoom()
  $('main').html(chatRoom)
}

const addHandlers = () => {
  $('html').on('submit', '#sign-in', onSignIn)
  $('html').on('submit', '#sign-up', onSignUp)
  $('html').on('click', '#guest', onGuest)
  $('html').on('click', '#guest2', onGuest2)
  $('html').on('submit', '#change-password', onChangePassword)
  $('html').on('click', '#sign-out', onSignOut)
  $('html').on('click', '#account', onAccountClick)
  $('html').on('click', '#home', onHomeClick)
}

module.exports = {
  addHandlers
}
