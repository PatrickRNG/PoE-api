const mongoose = require('mongoose');

const serviceSchema = new mongoose.Schema({
  name: String,
  price: Number
}, { _id: false });

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  league: { type: String, required: true },
  services: { type: [serviceSchema], required: true }
});

const User = mongoose.model('user', userSchema);

module.exports = User;