//jshint esversion:6

const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");
const path = require("path");

var favicon = require("serve-favicon");
const app = express();

app.use(express.static(path.join("public")));
app.use(favicon(path.join(__dirname, "public", "favicon.ico")));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function (req, res) {
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const email = req.body.emailAddr;

  const data = {
    members: [
      {
        email_address: email,
        status: "subscribed",
        merge_fields: {
          FNAME: firstName,
          LNAME: lastName,
        }
      }
    ]
  };

  var jsonData = JSON.stringify(data);

  const url = "https://usX.api.mailchimp.com/3.0/lists/";
  const listid = "";

  const options = {
    method: "POST",
    auth:"username:pass",
  };
 

  const request = https.request((url + listid), options, function (response) {

    if(response.statusCode === 200) {
      res.sendFile(__dirname + "/success.html");
    } else {
      res.sendFile(__dirname + "/failure.html");
    }

    response.on("data", function (data) {
      console.log(JSON.parse(data));
    });
  });

  request.write(jsonData);
  request.end();

});

app.post("/failure", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.listen(process.env.PORT || 3000, function () {
  console.log("Server is running!");
});