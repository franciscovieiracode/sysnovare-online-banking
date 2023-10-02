const getCustomer = (request, h) => {
    return "123";
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