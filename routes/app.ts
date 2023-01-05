import { FastifyInstance } from 'fastify';

async function appRoute(router: FastifyInstance) {
  router.get('/', () => {
    return { message: 'Hello World' };
  });
}

export default appRoute;