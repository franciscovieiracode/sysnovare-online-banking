const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const Movement = require('./movementSchema')

//Schema that represents a customer in system
const customerSchema = new mongoose.Schema({
  //First Name
  firstName: {
    type: String,
    required: true,
  },
  //Last Name
  lastName: {
    type: String,
    required: true,
  },
  //Email
  email: {
    type: String,
    required: true,
    lowercase: true,  //Guaranttes lowercase email
    unique: true, //Guarantees unique email
  },
  //Password
  password: {
    type: String,
    required: true,
    minlength: 8,
  },
  //Account Balance
  balance: {
    type: Number,
    default: 0, //Starting balance
  },
  //Account Iban
  iban: {
    type: String,
    required: true,
    unique: true, //Guarantees unique IBAN
  },
  //Account Moviments, references Movement Schema
  movements: [
    {
      type: mongoose.Schema.Types.Mixed,
      ref: 'Movement',
    },
  ],
});

customerSchema.pre('save', async function (next) {
    if (!this.isModified('password')) {
      return next();
    }
    //Hash customer password
    try {
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(this.password, salt);
      this.password = hashedPassword;
      next();
    } catch (error) {
      next(error);
    }
  });
  
  //Compares Hashed passwords
  customerSchema.methods.comparePassword = async function (candidatePassword) {
    return bcrypt.compare(candidatePassword, this.password);
  };

const Customer = mongoose.model('Customer', customerSchema);

module.exports = Customer;