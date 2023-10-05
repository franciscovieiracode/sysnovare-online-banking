const moneyManagementController = require('../controllers/moneyManagementController');
const Joi = require('joi');

const moneyManagement = {
  name: 'moneyManagement',
  version: '1.0.0',
  register: async function (server, options) {
    server.route([
      {
        method: 'PUT',
        path: '/api/v1/money-management/add-balance',
        handler: moneyManagementController.addBalance,
        options: {
          //Swagger Specification
          tags: ['api'],
          description: 'Endpoint to Add Balance',
          validate: {
            payload: Joi.object({
              amount: Joi.number().required().description('Amount to deposit'),
            }),
          },
        }
      },
      {
        method: 'PUT',
        path: '/api/v1/money-management/withdraw-balance',
        handler: moneyManagementController.withDrawBalance,
        options: {
          // Swagger Specification
          tags: ['api'],
          description: 'Endpoint to Withdraw Balance',
          validate: {
            //The amount has to be divided by 10 and 5
            payload: Joi.object({
              amount: Joi.number().required().description('Amount to withdraw')
                .custom((value, helpers) => {
                  if (value % 10 !== 0 && value % 5 !== 0) {
                    return helpers.message('Amount must be a multiple of 10');
                  }
                  return value;
                }),
            }),
          },
        },
      },
      {
        method: 'POST',
        path: '/api/v1/money-management/transfer',
        handler: moneyManagementController.transfers,
        options: {
          // Swagger Specification
          tags: ['api'],
          description: 'Endpoint to make transfers',
          validate: {
            payload: Joi.object({
              name: Joi.string().required().description('User Name'),
              amount: Joi.number().required().description('Amount'),
              iban: Joi.string().required().description('User Iban'),
              description: Joi.string().optional().description('Description'),
            }),
          },
        }
      },
      {
        method: 'POST',
        path: '/api/v1/money-management/payment',
        handler: moneyManagementController.payments,
        options: {
          // Swagger Specification
          tags: ['api'],
          description: 'Endpoint to Make Payments',
          validate: {
            payload: Joi.object({
              entity: Joi.number().required().description('Entity'),
              reference: Joi.number().required().description('Reference'),
              amount: Joi.number().required().description('Amount'),
            }),
          },
        }
      },
      {
        method: 'POST',
        path: '/api/v1/money-management/phone-payment',
        handler: moneyManagementController.phonePayment,
        options: {
          // Swagger Specification
          tags: ['api'],
          description: 'Endpoint to Make Phone Payments',
          validate: {
            payload: Joi.object({
              provider: Joi.string().valid('Meo', 'Vodafone', 'Nos').required().description('Provider'),
              number: Joi.string().required().description('Number'),
              amount: Joi.number().required().description('Amount'),
            }),
          },
        }
      }
    ]);
  },
};

module.exports = moneyManagement;
