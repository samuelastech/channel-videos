import app from '../app';

const port = Number(process.env.PORT) || 3000;

const server = app({ logger: true });

server.listen({ port, host: '0.0.0.0' }, (error, address) => {
  if (error) {
    server.log.error(error);
    process.exit(1);
  }
  server.log.info(`Server listening at ${address}`);
});