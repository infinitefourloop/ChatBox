'use strict'

const userEvents = require('./user/events.js')
const messageEvents = require('./message/events.js')

$(() => {
  userEvents.addHandlers()
  messageEvents.addHandlers()
})
