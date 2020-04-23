//jshint esversion:6

const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function (req, res) {

  const query = req.body.cityName;
  const units = "metric";
  const mode = "json";
  const appid = "c592e14137c3471fa9627b44f6649db4";

  const url =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    query +
    "&appid=" +
    appid +
    "&mode=" +
    mode +
    "&units=" +
    units;

    https.get(url, function(response) {
        console.log(response.statusCode);

        response.on("data", function (data) {
            var weatherData = JSON.parse(data);

            var name = weatherData.name;
            var temp = weatherData.main.temp;
            var icon = weatherData.weather[0].icon;

            const imgURL = "http://openweathermap.org/img/wn/" + icon + "@2x.png";
           
            res.write("<h1>Temperature in " + name + " is " + temp + " C</h1>");
            res.write("<img src=" + imgURL + ">");
            res.send();;
        });
    });
});

app.listen(3000, function () {
  console.log("Server started at port 3000");
});