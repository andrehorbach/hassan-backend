
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const _ = require("lodash");
const cors = require("cors");
const db = require("./models/clients");
//const { clients } = require("./app/models");

const app = express();

var corsOptions = {
  origin: "http://localhost:3000"
};

app.set('view engine', 'ejs');
app.use(cors(corsOptions));
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

//mongoose.connect("mongodb+srv://admin-andre:flapinho@cluster0.acnw3.mongodb.net/hassan-board?retryWrites=true&w=majority", {useNewUrlParser: true});
mongoose.connect("mongodb+srv://admin-andre:flapinho@cluster0.acnw3.mongodb.net/hassan-board?retryWrites=true&w=majority", {useNewUrlParser: true});


// const clientsSchema = {
//   id: String,
//   content: Number,
//   name: String,
//   startDate: Date,
//   injuries: Array,
//   shock:  Number
// }

// const Client = mongoose.model("Client", clientsSchema);

const clientList = db.Client();

app.get("/", function(req, res) {
  clientList.find({}, (err, foundItems) => {
    console.log(foundItems);
    res.send([foundItems]) // retirar [] se nao funcionar
  })
});


app.listen(8080, function() {
  console.log("Server started on port 8080");
});
