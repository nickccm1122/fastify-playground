'use strict'

// Require the framework
const Fastify = require('fastify')

// Instantiate Fastify with some config
const app = Fastify({
  logger: {
    level: 'debug',
    prettyPrint: true
  },
  pluginTimeout: 10000
})

// Register your application as a normal plugin.
app.register(require('./app.js'), {
  prefix: '/v1'
})

// Start listening.
app.listen(process.env.PORT || 3000, (err, address) => {
  if (err) {
    app.log.error(err)
    process.exit(1)
  }

  app.log.info(`server listening on ${address}`)

  app.log.info(app.printRoutes())
})
