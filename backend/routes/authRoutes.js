const authController = require('../controllers/authController');
const Joi = require('joi');

const authRoutes = {
  name: 'authRoutes',
  version: '1.0.0',
  register: async function (server, options) {
    server.route([
      {
        method: 'POST',
        path: '/api/v1/auth/signup',
        handler: authController.signUp,
        options: {
          //Open route
          auth: false,
          //Swagger Specification
          tags: ['api'],
          description: 'Endpoint to Create an account',
          validate: {
            payload: Joi.object({
              firstName: Joi.string().required().description('User first name'),
              lastName: Joi.string().required().description('User last name'),
              email: Joi.string().email().required().description('User email'),
              password: Joi.string().required().description('User password'),
            }),
          },
        }
      },
      {
        method: 'POST',
        path: '/api/v1/auth/login',
        handler: authController.login, 
        options: {
          //Open route
          auth: false,
          //Swagger Specification
          tags: ['api'],
          description: 'Endpoint to Login to an account',
          validate: {
            payload: Joi.object({
              email: Joi.string().email().required().description('User email'),
              password: Joi.string().required().description('User password'),
            }),
          },
        }
      }
    ]);
  },
};

module.exports = authRoutes;
