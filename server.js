// Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var exphbs = require("express-handlebars");
var mongoose = require("mongoose");

// Set up port
var PORT = process.env.PORT || 3000;

// Set express
var app = express();

// require routes
var router = express.Router();

require("./routes")(router);
//require("./routes/view")(router);


// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// This will use bodyParser to parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// This will use bodyParser to parse application/json
app.use(bodyParser.json());

// Set Handlebars so that view engine is handlebars.
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// every request will got through routes
app.use(router);

// If deployed, use the deployed database. Otherwise use the local mongoHeadlines database on your computer
var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/mongoHeadlines";

// Set mongoose to leverage built in JavaScript ES6 Promises
// Connect to the Mongo DB
mongoose.Promise = Promise;
//mongoose.connect(MONGODB_URI, {
//  useMongoClient: true
//});


app.listen(PORT, function() {
  console.log("App now listening at localhost:" + PORT);
});
