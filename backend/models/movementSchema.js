const mongoose = require('mongoose');

const movementSchema = new mongoose.Schema({
  type: {
    type: String,
    enum: ['payment', 'transfer', 'deposit', 'withdrawal', 'phone_payment'],
    required: true,
  },
  typeInPT:String,
  date: {
    type: Date,
    default: Date.now,
  },
  description: String,
  amount: {
    type: Number,
    required: true,
  },
  from: String, 
  to: String,
  phoneNumber: String
});

const Movement = mongoose.model('Movement', movementSchema);

module.exports = Movement;
