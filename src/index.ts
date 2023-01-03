import Fastify from "fastify"
import env from '@fastify/env'

async function bootstrap() {
    const fastify = Fastify({ logger: true })

    const envSchema = {
        type: 'object',
        required: ['PORT', 'KEY'],
        properties: {
            PORT: {
                type: 'string',
                default: 3000
            },

            KEY: {
                type: 'string'
            }
        }
    }

    const options = {
        schema: envSchema,
        dotenv: true,
        data: process.env
    }

    fastify.register(env, options)
    await fastify.after()


    await fastify.listen({ port: process.env.PORT, host: '0.0.0.0' })
}

bootstrap()