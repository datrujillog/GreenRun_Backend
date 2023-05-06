// rutas con Hapi
import * as Hapi from 'hapi';
import { ServiceUser } from '../services';

const server = new Hapi.Server({
    port: 3000,
    host: 'localhost'
});

// exports server.route({
//     method: 'GET',
//     path: '/',
//     handler: (request: Hapi.Request, h: Hapi.ResponseToolkit) => {
//       return '¡Hola, mundo!';
//     },
//   });

// export const routes = [ {
//     method: 'GET',
//     path: '/',
//     handler: (request: Hapi.Request, h: Hapi.ResponseToolkit) => {
//         return '¡Hola, mundo!';
//         }
//     }
// ];

export function routesUsers(server: Hapi.Server) {
    server.route({
        method: 'GET',
        path: '/',
        handler: (request: Hapi.Request, h: Hapi.ResponseToolkit) => {
            return '¡Hola, mundo Router!';
        },
    });
    server.route({
        method: 'GET',
        path: '/users',
        handler: async (request: Hapi.Request, h: Hapi.ResponseToolkit) => {
            const users = await ServiceUser.getServicesclen();
            return users;
        },
    });
}
// export default new RoutesClient();


