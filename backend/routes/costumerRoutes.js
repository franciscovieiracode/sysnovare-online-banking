const customerController = require('../controllers/costumerController');
const Joi = require('joi');


const customerRoutes = {
  name: 'customerRoutes',
  version: '1.0.0',
  register: async function (server, options) {
    server.route([
      {
        method: 'GET',
        path: '/',
        handler: customerController.getCustomer,
        options: {
          tags: ['api','auth'],
          description: 'Endpoint to Create an account',
        }
      },
      {
        method: 'GET',
        path: '/ola',
        handler: customerController.getAllCustomers1,
      }
      
    ]);
  },
};

module.exports = customerRoutes;