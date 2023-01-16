const hapi = require('@hapi/hapi');
// eslint-disable-next-line no-unused-vars
const rute = require('./rute');

const alur = async () => {
  const server = hapi.server({
    port: 3000,
    host: 'localhost',
    routes: {
      cors: {
        origin: ['*'],
      },
    },
  });

  server.route(rute);

  await server.start();
  console.log(`Server running ${server.info.uri}`);
};

alur();
