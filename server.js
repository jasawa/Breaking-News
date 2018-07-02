// Dependencies
const express = require("express");
const bodyParser = require("body-parser");
const exphbs = require("express-handlebars");
const mongoose = require("mongoose");

// Set up port
const PORT = process.env.PORT || 3000;

// Set express
const app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// This will use bodyParser to parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// This will use bodyParser to parse application/json
app.use(bodyParser.json());

// Set Handlebars so that view engine is handlebars.
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// This was in the burgers app -- might need
// Import routes and give the server access to them.
//var routes = require("./controllers/burgers_controller.js");
//
//app.use(routes);

// If deployed, use the deployed database. Otherwise use the local mongoHeadlines database on your computer
var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/mongoHeadlines";

// Set mongoose to leverage built in JavaScript ES6 Promises
// Connect to the Mongo DB
mongoose.Promise = Promise;
mongoose.connect(MONGODB_URI, {
  useMongoClient: true
});


app.listen(PORT, function() {
  console.log("App now listening at localhost:" + PORT);
});
