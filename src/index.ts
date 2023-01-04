import Fastify from "fastify"
import env from '@fastify/env'

async function bootstrap() {
    const fastify = Fastify({ logger: true })

    const envSchema = {
        type: 'object',
        required: ['PORT', 'KEY'],
        properties: {
            PORT: { type: 'number', },
            KEY: { type: 'string' }
        }
    }

    const options = {
        schema: envSchema,
        dotenv: true,
        data: process.env
    }

    fastify.register(env, options)
    await fastify.after()

    const port = typeof process.env.PORT === 'number' ? process.env.PORT : 3000
    await fastify.listen({ port, host: '0.0.0.0' })
}

bootstrap()