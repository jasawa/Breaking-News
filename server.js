// Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var exphbs = require("express-handlebars");
var mongoose = require("mongoose");
var logger = require("morgan");


// Set up port
var PORT = process.env.PORT || 3000;

// Set express
var app = express();

// require routes
//var router = express.Router();

//require("./routes")(router);
//require("./routes/view")(router);

// every request will got through routes
//app.use(router);

var routes = require("./routes");
app.use(routes);

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// This will use bodyParser to parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// This will use bodyParser to parse application/json
app.use(bodyParser.json());

// Set Handlebars so that view engine is handlebars.
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// use morgan logger for logging requests
app.use(logger("dev"));

// If deployed, use the deployed database. Otherwise use the local mongoHeadlines database on your computer
//var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/mongoHeadlines";
mongoose.connect("mongodb://heroku_6h0pjc2k:ghtrc4087gg35eb7ati2kudsbl@ds131551.mlab.com:31551/heroku_6h0pjc2k");
  //richardkim:b3wh910w@ds233061.mlab.com:33061/heroku_b3wh9l0w”);
// Set mongoose to leverage built in JavaScript ES6 Promises
// Connect to the Mongo DB
//mongoose.Promise = Promise;
//mongoose.connect(MONGODB_URI, {
//  useMongoClient: true
//});


app.listen(PORT, function() {
  console.log("App now listening at localhost:" + PORT);
});
