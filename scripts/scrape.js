
var cheerio = require("cheerio");
var request = require("request");

var scrape = function() {
    // Make a request call to grab the html from nytimes
    request("http://www.nytimes.com", function(error, response, html) {

        // Load into cheerio and save it to a variable
        // '$' becomes a shorthand for cheerio's selector commands, much like jQuery's '$'
       var $ = cheerio.load(html);

        // Select each element in the html from which you want information.
        // NOTE: Cheerio selectors function similarly to jQuery's selectors,
        // but be sure to visit the package's npm page to see how it works
        $("article.story").each(function(i, element) {
            var result = {};

            // add text and href of every link, and save them as properties of the result object
            result.link = $(this).children(".story-heading").attr("href");
            result.title = $(this).children(".story-heading").text();
            result.summary = $(this).children(".summary").text();

            db.Headline.create(result)
                .then(function(dbHeadline) {
                    console.log(dbHeadline);
                })
                .catch(function(err) {
                    // if error occurred, send it to the client
                    return resizeBy.json(err);
                });
        });
        console.log("Scrape Complete");
    });
}
module.exports = scrape;
