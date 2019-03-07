'use strict'

const fp = require('fastify-plugin')

function sayHelloMiddleware(req, res, next) {
  req.log.debug('saying hello from sayHelloMiddleware')

  next()
}

module.exports = fp(
  async function(fastify, options) {
    fastify.use(options.prefix, sayHelloMiddleware)
  },
  {
    name: 'demo-say-hello-middleware'
  }
)
