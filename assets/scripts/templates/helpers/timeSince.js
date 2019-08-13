'use strict'

const moment = require('moment')

const timeSince = (date) => {
  return moment(date).fromNow()
}

module.exports = timeSince
