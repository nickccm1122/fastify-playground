'use strict'

const fp = require('fastify-plugin')

function authzMiddleware(req, res, next) {
  req.log.debug('saying hello from authorization middleware')

  next()
}

module.exports = authzMiddleware
