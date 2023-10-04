const Customer = require('../models/customerSchema');

//Endpoint to get own profile
const getCustomer = async (request, h) => {
  const userId = request.auth.credentials.id;
  
    try {
      // Find the customer by ID
      const customer = await Customer.findById(userId);
  
      if (!customer) {
        return h.response({ error: 'Customer not found' }).code(404);
      }
  
      return {
        status: true,
        customer: customer,
      };
    } catch (error) {
      console.error(error);
      return h.response({ error: 'An error occurred' }).code(500);
    }
  };

  //Endpoint to get Moviments
  const getMoviments = async (request, h) => {
    const userId = request.auth.credentials.id;
    
      try {
        // Find the customer by ID
        const customer = await Customer.findById(userId);
    
        if (!customer) {
          return h.response({ error: 'Customer not found' }).code(404);
        }
    
        return {
          status: true,
          moviments: customer.movements,
        };
      } catch (error) {
        console.error(error);
        return h.response({ error: 'An error occurred' }).code(500);
      }
    };

  module.exports = {
    getCustomer,
    getMoviments 
  }