const authController = require('../controllers/authController');

const authRoutes = {
  name: 'authRoutes',
  version: '1.0.0',
  register: async function (server, options) {
    server.route([
      {
        method: 'POST',
        path: '/api/v1/auth/signup',
        handler: authController.signUp,
      },
    ]);
  },
};

module.exports = authRoutes;
