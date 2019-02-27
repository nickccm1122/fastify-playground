'use strict'

async function routes(fastify, options) {
  const database = fastify.mongo.db('db')
  const collection = database.collection('test')

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

  fastify.get('/todos/search/:id', async (request, reply) => {
    const result = await collection.findOne({ id: request.params.id })

    if (result === null || result.value === null) {
      throw new Error('Invalid value')
    }

    return result.value
  })
}

module.exports = routes
