
var cheerio = require("cheerio");
var request = require("request");

var scrape = function() {
// Make a request call to grab the body from nytimes
request("http://www.nytimes.com", function(error, response, body) {

  // Load into cheerio and save it to a variable
  // '$' becomes a shorthand for cheerio's selector commands, much like jQuery's '$'
  var $ = cheerio.load(body);

  // An empty array to save the data that we'll scrape
  var results = [];

  // Select each element in the body from which you want information.
  // NOTE: Cheerio selectors function similarly to jQuery's selectors,
  // but be sure to visit the package's npm page to see how it works
  $("article.story").each(function(i, element) {

    var link = $(element).children(".story-heading").attr("href");
    var title = $(element).children(".story-heading").text();
    var summary =  $(element).children(".summary").text();

    // Save these results in an object that we'll push into the results array we defined earlier
    results.push({
      title: title,
      link: link,
      summary: summary
    });
  });

  // Log the results once you've looped through each of the elements found with cheerio
  console.log(results);
});
}
module.exports = scrape;
