const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res) {
 res.send('Get request ok')
});

app.post("/posts", function(req, res) {
  const data = req.body
  console.log(data)
  res.send("Post request reached")
});

// app.put("/", function(req, res){
//   columnsList.findOneAndUpdate({}, res.body, (err, doc)=>{
//     console.log('RESPONSE START');
//     console.log(req.method);
//     console.log(err ? "Erro!" : "Sem erro!");
//     console.log(doc);
//     console.log('RESPONSE END');
//   })
// })

app.listen(8080, function() {
  console.log("Server started on port 8080");
});
