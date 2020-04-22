//jshint esversion:6

const express = require("express");
var favicon = require('serve-favicon');
const bodyParser = require("body-parser");
const path  = require('path');

const app = express();

app.use(express.static(path.join("public")));
app.use(favicon(path.join(__dirname,'public', 'favicon.ico')));
app.use(bodyParser.urlencoded({ extended: true }));


app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function (req, res) {

  var firstName = req.body.firstName;
  var lastName = req.body.lastName;
  var email = req.body.emailAddr;

  console.log(firstName);
  console.log(lastName);
  console.log(email);
});

app.listen(3000, function () {
  console.log("Server started at port 3000");
});