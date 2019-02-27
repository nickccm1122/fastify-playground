'use strict'

module.exports = async function(fastify, options) {
  fastify.register(require('./plugins/dbConnector'), {
    url: 'mongodb://localhost:27017/fastify-playground'
  })

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
  fastify.register(require('./services/todos'))

  fastify.register(require('./services/users'))

  fastify.register(require('./services/demo'))

  return fastify
}
