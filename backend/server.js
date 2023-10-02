'use strict';

const Hapi = require('@hapi/hapi');
const Inert = require('@hapi/inert');
const Vision = require('@hapi/vision');
const Joi = require('joi');


const database = require('./config/database');
const authRoutes = require('./routes/authRoutes')
const customerRoutes = require('./routes/costumerRoutes')

const init = async () => {
    const server = Hapi.server({
        port: 3000,
        host: 'localhost'
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

        //Register Routes
        await server.register(authRoutes);
        await server.register(customerRoutes);

        // Start the Hapi.js server
        await server.start();
        console.log('Server listening at ' + server.info.uri);
    } catch (error) {
        console.error('Error starting the server:', error);
        process.exit(1);
    }
};

init();
