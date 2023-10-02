const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const customerSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    lowercase: true,  //Guaranttes lowercase email
    unique: true, //Guarantees unique email
  },
  password: {
    type: String,
    required: true,
    minlength: 8,
  },
  
  balance: {
    type: Number,
    default: 0, //Starting balance
  },
  iban: {
    type: String,
    required: true,
    unique: true, //Guarantees unique IBAN
  }
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
  
  customerSchema.methods.comparePassword = async function (candidatePassword) {
    return bcrypt.compare(candidatePassword, this.password);
  };

const Customer = mongoose.model('Customer', customerSchema);

module.exports = Customer;