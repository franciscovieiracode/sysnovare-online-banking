const customerController = require('../controllers/costumerController');
const Joi = require('joi');


const customerRoutes = {
  name: 'customerRoutes',
  version: '1.0.0',
  register: async function (server, options) {
    server.route([
      {
        method: 'GET',
        path: '/api/v1/profile/get-profile',
        handler: customerController.getCustomer,
        options: {
          tags: ['api','auth'],
          description: 'Endpoint to Get Profile Data',
        }
      },
      {
        method: 'GET',
        path: '/api/v1/profile/get-moviments',
        handler: customerController.getMoviments,
        options: {
          tags: ['api','auth'],
          description: 'Endpoint to Get Profile Moviments',
        }
      }
    ]);
  },
};

module.exports = customerRoutes;