const mongoose = require("mongoose");

const columnsSchema = new mongoose.Schema({
    Columns: Object
  },
);

const Column = mongoose.model('Column', columnsSchema);

module.exports = {
  Column: function() {
   return Column;
  }
}; 


