// SERVER RUNNING FOR COLUMNS

const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const _ = require("lodash");
const cors = require("cors");
const db = require("./models/columns");


const app = express();

var corsOptions = {
  origin: "https://hassan-frontend.onrender.com"
  //origin: "http://localhost:3000"
};

app.use(cors(corsOptions));
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
app.use(express.json());
app.use(bodyParser.json());

mongoose.connect("mongodb+srv://admin-andre:GGn8q02h6SaqSDz8@cluster0.acnw3.mongodb.net/hassan-board?retryWrites=true&w=majority", {useNewUrlParser: true});


const columnsList = db.Column();

app.get("/", function(req, res) {
  columnsList.find({}, (err, foundItems) => {
    res.send(foundItems) 
    console.log(foundItems);
  })
});

app.post("/posts", function(req, res) {
  const data = req.body
  
  console.log(data)

  columnsList.findOneAndUpdate({}, data, {new: true}, (err, doc)=>{
    console.log(doc)
    doc.save();
  })

  res.send("OK")

});

  let port = process.env.PORT;

  if (port == null || port == "") {
      port = 8080;
  }
  
  app.listen(port, function(){
      console.log("server started on 8080.")
  })
