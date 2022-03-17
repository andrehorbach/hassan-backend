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


// const mongoose = require("mongoose");

// const clientsSchema = new mongoose.Schema({
//   name: String,
//   startDate: Date,
//   injuries: Array,
//   shock: {
//     type: Number,
//     default: 0
//   }
// });

// const columnsSchema = new mongoose.Schema({
//     Columns: {
//       Column: {
//         name: String,
//         items: [clientsSchema],
//         style: Object, 
//       }  
//     }
//   },
// );

// const Column = mongoose.model('Column', columnsSchema);

// module.exports = {
//   Column: function() {
//    return Column;
//   }
// }; 
