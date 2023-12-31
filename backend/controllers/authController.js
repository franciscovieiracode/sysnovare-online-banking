const Customer = require('../models/customerSchema'); // Import the Customer model
const jwt = require('jsonwebtoken');
const { secretKey } = require('../config/jwtSecret'); // Import your secret key
const generateIban = require('../utils/ibanGenerator') //Import IBAN generator

//Endpoint to SignUp in system
const signUp = async (request, h) => {
  try {
    const { firstName, lastName, email, password } = request.payload;

    // Check if the email is already taken
    const existingCustomer = await Customer.findOne({ email });
    if (existingCustomer) {
      return h.response({ message: 'Email already taken!' }).code(400);
    }

    //Generates IBAN for customer
    const iban = generateIban()

    // Create a new customer
    const newCustomer = new Customer({
      firstName,
      lastName,
      email,
      password,
      iban,
    });

    // Save the new customer to the database
    await newCustomer.save();

    // Generate a JWT token for the registered user
    const token = jwt.sign({ id: newCustomer._id }, secretKey, { expiresIn: '24h' });

    console.log("Customer with email "+newCustomer.email+" registered sucessfull!!");

    return { 
        "status": true,
        "token" : token 
    };
  } catch (error) {
    console.error('Error registering customer:', error);
    return h.response({ message: 'Error registering customer' }).code(500);
  }
};

//Endpoint to login in system
const login = async (request, h) => {
    try {
        const { email, password } = request.payload;
    
        // Find the customer by email
        const customer = await Customer.findOne({ $or: [{ email }, { email: email }] });
    
        if (!customer || !(await customer.comparePassword(password))) {
          return h.response({ message: 'Invalid credentials' }).code(401);
        }
    
        // Generate a JWT token for the authenticated user
        const token = jwt.sign({ id: customer._id }, secretKey, { expiresIn: '24h' });
    
        return { 
            "status": true,
            "token" : token 
        };
      } catch (error) {
        console.error('Error logging in:', error);
        return h.response({ message: 'Error logging in' }).code(500);
      }}

module.exports = {
  signUp,
  login
};
