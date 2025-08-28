const mongoose = require('mongoose');

// Definisikan Schema
const userSchema = new mongoose.Schema({
  nama: {
    type: String,
    required: true,
  },
  username: {   // biasain lowercase biar konsisten
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ['Admin', 'Worker'], // hanya bisa Admin atau worker
    required: true,
  }
});

// Buat Model
const User = mongoose.model('User', userSchema);

module.exports = User;
