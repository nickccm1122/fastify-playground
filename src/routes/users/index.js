'use strict'

async function routes(fastify, options) {
  const database = fastify.mongo.db('db')
  const collection = database.collection('test')

  fastify.get(
    '/users/healthcheck',
    async (request, reply) => {
      return { user: 'healthcheck version (default version)' }
    }
  )

  fastify.get(
    '/users/healthcheck',
    { version: '1.3.0' },
    async (request, reply) => {
      return { user: 'healthcheck version 1.3.0' }
    }
  )

  fastify.get('/users/search/:id', async (request, reply) => {
    const result = await collection.findOne({ id: request.params.id })

    if (result === null || result.value === null) {
      throw new Error('Invalid value')
    }

    return result.value
  })
}

module.exports = routes
