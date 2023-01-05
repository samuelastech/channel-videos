import fastify from 'fastify';
import dotenv from 'dotenv';

dotenv.config();

/**
 * Routes
 */
import appRoute from './routes/app';

function build(options = {}) {
  const app = fastify(options);
  
  app.register(cors, { origin: true });

  app.register(appRoute);

  return app;
}

export default build;