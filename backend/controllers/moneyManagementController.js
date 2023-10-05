const Customer = require('../models/customerSchema');
const Movement = require('../models/movementSchema');


// Endpoint to add balance
const addBalance = async (request, h) => {
    const userId = request.auth.credentials.id;
  
    try {
      // Find the customer by ID
      const customer = await Customer.findById(userId);
  
      if (!customer) {
        return h.response({ error: 'Customer not found' }).code(404);
      }
  
      // Update the balance field
      customer.balance += request.payload.amount
  
      // Create a new Movement document for the deposit
      const depositMovement = new Movement({
        type: 'deposit',
        amount: request.payload.amount,
        typeInPT: "Depósito"
      });
  
      // Save the new Movement document
      await depositMovement.save();

      //Adds Movement to Array
      customer.movements.push(depositMovement)

      // Save the updated customer document
      await customer.save();
  
      return {
        status: true,
        currentBalance: customer.balance,
      };
    } catch (error) {
      console.error(error);
      return h.response({ error: 'An error occurred' }).code(500);
    }
  };

// Endpoint to withdraw money
const withDrawBalance = async (request, h) => {
    const userId = request.auth.credentials.id;
  
    try {
      // Find the customer by ID
      const customer = await Customer.findById(userId);
  
      if (!customer) {
        return h.response({ error: 'Customer not found' }).code(404);
      }
  
      // Update balance
      if(customer.balance >= request.payload.amount)
        customer.balance -= request.payload.amount
      else{
        return h.response({error: "Insufficuent funds"}).code(400);
      }
      
  
      // Create a new Movement document for the withdraw
      const withdrawalMovement = new Movement({
        type: 'withdrawal',
        amount: request.payload.amount,
        typeInPT: "Levantamento"
      });
  
      // Save the new Movement document
      await withdrawalMovement.save();

      //Adds Movement to Array
      customer.movements.push(withdrawalMovement)

      // Save the updated customer document
      await customer.save();
  
      return {
        status: true,
        currentBalance: customer.balance,
      };
    } catch (error) {
      console.error(error);
      return h.response({ error: 'An error occurred' }).code(500);
    }
  };

// Endpoint to transfers 
const transfers = async (request, h) => {
    const userId = request.auth.credentials.id;
  
    try {
      // Find the customer by ID
      const customer = await Customer.findById(userId);
  
      if (!customer) {
        return h.response({ error: 'Customer not found' }).code(404);
      }
  
      //Find receiver customer by iban
      const receiver = await Customer.findOne({iban: request.payload.iban})

      //Check if ibans exists
      if(!receiver){
        return h.response({error: 'Invalid Iban'}).code(404);
      }

      // Update the sender balance
      if(customer.balance >= request.payload.amount)
        customer.balance -= request.payload.amount
      else{
        return h.response({error: "Insufficuent funds"}).code(400);
      }

      // Update the receiver balance 
      receiver.balance += request.payload.amount

      // Create a new Movement document for the sender
      const sentMovement = new Movement({
        type: 'transfer',
        amount: request.payload.amount,
        from: customer.iban,
        to: receiver.iban,
        description: request.payload.description,
        typeInPT: "Transferência"
      });

      // Create a new Movement document for the receiver
      const receiveMovement = new Movement({
        type: 'transfer',
        amount: request.payload.amount,
        from: receiver.iban,
        to: customer.iban,
        description: request.payload.description,
        typeInPT: "Transferência"
      });
  
      // Save the new Movement document
      await sentMovement.save();
      await receiveMovement.save();

      //Adds Movement to Array
      customer.movements.push(sentMovement);
      receiver.movements.push(receiveMovement);

      // Save the updated customer and receiver document
      await customer.save();
      await receiver.save();
  
      return {
        status: true,
        sent: customer,
        receive: receiver
      };
    } catch (error) {
      console.error(error);
      return h.response({ error: 'An error occurred' }).code(500);
    }
  };

// Endpoint to make payments
const payments = async (request, h) => {
    const userId = request.auth.credentials.id;
  
    try {
      // Find the customer by ID
      const customer = await Customer.findById(userId);
  
      if (!customer) {
        return h.response({ error: 'Customer not found' }).code(404);
      }
  
      // Update balance
      if(customer.balance >= request.payload.amount)
        customer.balance -= request.payload.amount
      else{
        return h.response({error: "Insufficuent funds"}).code(400);
      }
  
      // Create a new Movement document for the deposit
      const paymenttMovement = new Movement({
        type: 'payment',
        amount: request.payload.amount,
        description: "Entidade: "+ request.payload.entity + " Referência: " + request.payload.reference,
        typeInPT: "Pagamento Serviços"
      });
  
      // Save the new Movement document
      await paymenttMovement.save();

      //Adds Movement to Array
      customer.movements.push(paymenttMovement)

      // Save the updated customer document
      await customer.save();
  
      return {
        status: true,
        customer: customer,
      };
    } catch (error) {
      console.error(error);
      return h.response({ error: 'An error occurred' }).code(500);
    }
  };

  // Endpoint to make payments
const phonePayment = async (request, h) => {
    const userId = request.auth.credentials.id;
  
    try {
      // Find the customer by ID
      const customer = await Customer.findById(userId);
  
      if (!customer) {
        return h.response({ error: 'Customer not found' }).code(404);
      }
  
      // Update balance
      if(customer.balance >= request.payload.amount)
        customer.balance -= request.payload.amount
      else{
        return h.response({error: "Insufficuent funds"}).code(400);
      }
  
      // Create a new Movement document for the deposit
      const phoneMovement = new Movement({
        type: 'phone_payment',
        amount: request.payload.amount,
        description: request.payload.provider,
        phoneNumber: request.payload.number,
        typeInPT: "Carr. Telemóvel"
      });
  
      // Save the new Movement document
      await phoneMovement.save();

      //Adds Movement to Array
      customer.movements.push(phoneMovement)

      // Save the updated customer document
      await customer.save();
  
      return {
        status: true,
        customer: customer,
      };
    } catch (error) {
      console.error(error);
      return h.response({ error: 'An error occurred' }).code(500);
    }
  };


module.exports = {
    addBalance,
    withDrawBalance,
    transfers,
    payments,
    phonePayment
}