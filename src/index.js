'use strict'

const fastify = require('fastify')

;(async function main() {
  try {
    const app = await require('./app')(
      fastify({
        logger: true,
        prefix: '/v1'
      })
    )

    // Run the server!
    app.listen(3000, function(err, address) {
      if (err) {
        app.log.error(err)
        process.exit(1)
      }
      app.log.info(`server listening on ${address}`)

      app.log.info(app.printRoutes())
    })
  } catch (err) {
    // handle error
  }
})()
