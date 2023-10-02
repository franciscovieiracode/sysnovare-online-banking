'use strict';

const Hapi = require('@hapi/hapi');
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
