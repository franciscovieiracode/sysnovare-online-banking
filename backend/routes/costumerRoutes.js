const customerController = require('../controllers/costumerController');

const customerRoutes = {
  name: 'customerRoutes',
  version: '1.0.0',
  register: async function (server, options) {
    server.route([
      {
        method: 'GET',
        path: '/',
        handler: customerController.getCustomer,
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