const Customer = require('../models/customerSchema');

//Endpoint to get own profile
const getCustomer = async (request, h) => {
  const userId = request.auth.credentials.id;

  const customer = await Customer.findById(userId);

    return {customer}
  };

  const getAllCustomers1 = (request, h) => {
    var data ={
        "key": "json",
        "another": false,
        "number": 10
      }
    return data;
  };

  module.exports = {
    getCustomer,
    getAllCustomers1
  }