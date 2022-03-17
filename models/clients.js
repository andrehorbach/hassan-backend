const mongoose = require("mongoose");

const clientsSchema = new mongoose.Schema({
  name: String,
  startDate: Date,
  injuries: Array,
  shock: {
    type: Number,
    default: 0
  }
});

const Client = mongoose.model('Client', clientsSchema);

module.exports = {
  Client: function() {
   return Client;
  }
};