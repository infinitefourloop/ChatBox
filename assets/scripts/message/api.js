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

const editMessage = (formData, id) => {
  return $.ajax({
    url: config.apiUrl + `/messages/${id}`,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: formData
  })
}

const deleteMessage = id => {
  return $.ajax({
    url: config.apiUrl + `/messages/${id}`,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  indexMessages,
  createMessage,
  deleteMessage,
  editMessage
}
