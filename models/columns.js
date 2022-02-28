const mongoose = require("mongoose");

const columnsSchema = new mongoose.Schema({
    name: String,
  },
);

const Column = mongoose.model('Column', columnsSchema);

module.exports = {
  Column: function() {
   return Column;
  }
}; 