'use strict'

const config = require('../config')
const store = require('../store')

const indexMessages = formData => {
  return $.ajax({
    url: config.apiUrl + '/messages',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const createMessage = msg => {
  return $.ajax({
    url: config.apiUrl + '/messages',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: {
      message: {
        text: msg
      }
    }
  })
}

module.exports = {
  indexMessages,
  createMessage
}
