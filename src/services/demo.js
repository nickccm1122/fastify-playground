'use strict'

const fastifyPlugin = require('fastify-plugin')

/**
 * Demostrate how fastify-plugin behaves
 */
async function routes(fastify, opts) {
  fastify.decorate('utility', {
    smile: () => fastify.log.info('😃')
  })

  fastify.get('/demo', async (request, reply) => {
    fastify.utility.smile()
    reply.send({ smile: true })
  })
}

// Wrapping a plugin function with fastify-plugin exposes the `decorators`,
// `hooks`, and `middlewares` declared inside the plugin to the parent scope.
//
// Using `fastify-plugins` means to tell Fastify to not create a new scope.
//
// you may try replace the module.exports below and the parent scope can use
// `fastify.utility.smile()`
//
// module.exports = fastifyPlugin(routes)
module.exports = routes
