'use strict'

const isOwner = (id1, id2) => {
  if (id1 === id2) {
    return true
  } else {
    return false
  }
}

module.exports = isOwner
