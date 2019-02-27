# Learning Fastify

trying out fastify@^1.14.0

## Using Middleware

- Fastify middlewares don't support the full syntax middleware(err, req, res, next), because error handling is done inside Fastify. 
- Furthermore methods added by Express and Restify to the enhanced versions of req and res are not supported in Fastify middlewares.
