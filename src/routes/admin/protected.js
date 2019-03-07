'use strict'

// QUESTION: wanna use `this` ????
async function getAll(request, reply) {
  const data = await this.todoServiceV1.getAllTodos()
  this.utils.bark()
  reply.send(data)
}

async function protectedRoutes(fastify, options) {
  fastify.use(fastify.authorizationMiddleware)

  fastify.post('/todos', async (request, reply) => {
    await fastify.todoServiceV1.addTodo(request.body)
    reply.send({
      success: true
    })
  })

  fastify.get('/todos', getAll)
}

// Any fastify plugin can declare its dependencies.
protectedRoutes[Symbol.for('plugin-meta')] = {
  decorators: {
    fastify: ['authorizationMiddleware', 'todoServiceV1', 'utils']
  }
}

module.exports = protectedRoutes
