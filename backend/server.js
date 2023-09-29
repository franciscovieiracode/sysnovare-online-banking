// server.js

'use strict';

const Hapi = require('@hapi/hapi');
const database = require('./config/database');

const init = async () => {
    const server = Hapi.server({
        port: 3000,
        host: 'localhost'
    });

    try {
        //Initialize the database connection
        await database;

        // Start the Hapi.js server
        await server.start();
        console.log('Server listening at ' + server.info.uri);
    } catch (error) {
        console.error('Error starting the server:', error);
        process.exit(1);
    }
};

init();
