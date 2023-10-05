const mongoose = require('mongoose');

//Schema that Represents a Moviment/Transaction 
const movementSchema = new mongoose.Schema({
  //Transaction Type
  type: {
    type: String,
    enum: ['payment', 'transfer', 'deposit', 'withdrawal', 'phone_payment'],
    required: true,
  },
  //Type in Portuguese
  typeInPT:String,
  //Date
  date: {
    type: Date,
    default: Date.now,
  },
  //Description
  description: String,
  //Amount
  amount: {
    type: Number,
    required: true,
  },
  //Who sent the money, iban
  from: String, 
  //Who received the money, iban
  to: String,
  //Phone Number
  phoneNumber: String
});

const Movement = mongoose.model('Movement', movementSchema);

module.exports = Movement;
