
module.exports = function(router) {
    // render homepage
    router.get("/", function(req, res) {
        res.render("home");
    });
    // render saved page
    router.get("/saved", function(req, res) {
        res.render("saved");
    })
}
/*
var router = require("express").Router();


//module.exports = function(router) {
// render homepage

router.get("/", function(req, res) {
    res.render("views/home");   // view engine knows this is home.handlebars
});

// render saved page
router.get("/saved", function(req, res) {
    res.render("views/saved");  // view engine knows this is saved.handlebars
});
//}
module.exports = router;*/