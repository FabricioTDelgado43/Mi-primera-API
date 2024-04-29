const mongoose = require("mongoose");

const userschema = mongoose.Schema({
  nombre: {
    type: String,
    required: true
    },
  edad: {
    type: Number,
    required: true
  },
  correo: {
    type: String,
    required: true
  },
  domicilio: {
    type: String,
    required: true
  },
    documento: {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model('user', userschema);