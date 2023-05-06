import * as Hapi from 'hapi';
import { routesUsers } from './routers';
import { config } from './conf/config';


const server = new Hapi.Server({
  port: config.port,
  host: 'localhost',
});


routesUsers(server);



const start = async () => {
  try {
    await server.start();
    console.log(`Servidor iniciado en: ${server.info.uri}`);
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};

start();

