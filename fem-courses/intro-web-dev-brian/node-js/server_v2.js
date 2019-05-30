Change your server to look like this
const express = require("express");

const app = express();

app.get("/", function(req, res) {
  res.end("Welcome to my site!");
});

// this is one "route"
app.get("/complement", function(req, res) { // if the user goes to  http://localhost:3000/complement
  res.end("You look nice today");
});

app.listen(3000);
console.log("listening on http://localhost:3000");

