'use strict';

const Hapi = require('@hapi/hapi');
const Inert = require('@hapi/inert');
const Vision = require('@hapi/vision');
const Joi = require('joi');
const hapiAuthJwt2 = require('hapi-auth-jwt2');

const database = require('./config/database');
const authRoutes = require('./routes/authRoutes')
const customerRoutes = require('./routes/costumerRoutes');
const moneyManagementRoutes = require('./routes/moneyManagementRoutes');
const { secretKey } = require('./config/jwtSecret');

const init = async () => {
    const server = Hapi.server({
        port: 3000,
        host: 'localhost',
        "routes": {
            "cors": true
        }
    });

    try {
        //Initialize the database connection
        database;

        //Register Inert and Vision
        await server.register([Inert, Vision]);

        const swaggerOptions = {
            info: {
              title: 'Sysnovare REST API Documentation',
              version: '1.0.0',
            },
          };

          await server.register({
            plugin: require('hapi-swagger'),
            options: swaggerOptions,
          });

        //Register JWT-Hapi-Plugin
        await server.register(hapiAuthJwt2)

        server.auth.strategy('jwt', 'jwt',{
            key: secretKey,
            validate: function(){
                return {isValid: true}
            },
            verifyOptions: {
                algorithms: ['HS256']
            }
        })

        server.auth.default('jwt')

        //Register Routes
        await server.register(authRoutes);
        await server.register(customerRoutes);
        await server.register(moneyManagementRoutes)

        // Start the Hapi.js server
        await server.start();
        console.log('Server listening at ' + server.info.uri);
    } catch (error) {
        console.error('Error starting the server:', error);
        process.exit(1);
    }
};

init();
