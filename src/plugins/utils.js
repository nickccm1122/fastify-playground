'use strict'

const fp = require('fastify-plugin')

module.exports = fp(async function(fastify, options) {
  fastify.decorate('utils', {
    bark: () => fastify.log.debug('WOW WOW')
  })
})
