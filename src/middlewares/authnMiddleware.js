'use strict'

const fp = require('fastify-plugin')

function authnMiddleware(req, res, next) {
  req.log.debug('saying hello from authentication middleware')

  next()
}

module.exports = authnMiddleware