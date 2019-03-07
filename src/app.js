'use strict'

const TodoService = require('./services/todos')
const TodoRepo = require('./repositories/todoRepo')

module.exports = async function(fastify, options) {

  fastify.register(require('./plugins/utils'))

  fastify.register(require('./plugins/dbConnector'), {
    url: 'mongodb://localhost:27017/fastify-playground'
  })

  fastify.decorate(
    'authenticationMiddleware',
    require('./middlewares/authnMiddleware')
  )

  fastify.decorate(
    'authorizationMiddleware',
    require('./middlewares/authzMiddleware')
  )

  fastify.decorate(
    'todoServiceV1',
    new TodoService({
      todoRepo: new TodoRepo()
    })
  )

  // `after` will be executed once
  // the previous declared `register` has finished
  //
  // better to put logic to handle previous async registration error
  fastify.after(err => {
    if (err) {
      fastify.log.error(err)
    }
  })

  // `ready` will be executed once all the registers declared
  // have finished their execution
  fastify.ready(err => {
    if (err) {
      fastify.log.error(err)
    }
  })
  /**
   * fastify.register(plugin, [options])
   *
   * if the plugin use `fastify-plugin`, the options won't work
   *
   * Questions: Is it async?
   */
  fastify.register(require('./routes/admin'))

  // fastify.register(require('./routes/users'))

  // fastify.register(require('./routes/demo'))

  return fastify
}
