//var scrape = require("../scripts/scrape");
var db = require("../models");

// Module for getting all headlines info from the db
app.get("/headlines", function(req, res) {
  // Grab every document in the Headline collection
  db.Headline.find({})
    .then(function(dbHeadline) {
      // If we were able to successfully find Headlines, send them back to the client
      res.json(dbHeadline);
    })
    .catch(function(err) {
      // If an error occurred, send it to the client
      res.json(err);
    });
});