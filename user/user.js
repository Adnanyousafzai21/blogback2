const mongoose = require("mongoose");


const registrationSchema = new mongoose.Schema({
  fristname: String,
  lastname: String,
  email: { type: String, unique: true, index: true },
  password: String,
});

const registration = mongoose.model('Registration', registrationSchema);

module.exports = registration;
