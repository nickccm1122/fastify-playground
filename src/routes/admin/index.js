'use strict'

async function routes(fastify, options) {
  fastify.register(require('./protected'))

  fastify.get('/todos/search/:id', async (request, reply) => {
    const todo = await fasticy.todoServiceV1.getTodo(request.params.id)
    reply.send(todo)
  })

  fastify.get('/todos/healthcheck', async (request, reply) => {
    return { hello: 'healthcheck version (default version)' }
  })

  fastify.get(
    '/todos/healthcheck',
    { version: '1.3.0' },
    async (request, reply) => {
      return { hello: 'healthcheck version 1.3.0' }
    }
  )
}

routes[Symbol.for('plugin-meta')] = {
  decorators: {
    fastify: ['todoServiceV1']
  }
}

module.exports = routes
