const Hapi = require('@hapi/hapi');
const routes = require('./routes');
/**
 * Server initialisation
 */
async function init() {
  const server = Hapi.server({
    port: process.env.NODE_ENV === 'production' ? 5000 : 3000,
    host: process.env.NODE_ENV === 'production' ? '0.0.0.0' : 'localhost',
    routes: {
      cors: {
        origin: ['*'],
      },
    },
  });

  server.route(routes);
  await server.start();
  console.log(`Server running on: ${server.info.uri}`);
}


init();
