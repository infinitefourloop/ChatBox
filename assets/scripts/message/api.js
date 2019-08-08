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
    data: {
      message: {
        text: msg
      }
    },
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  indexMessages,
  createMessage
}
