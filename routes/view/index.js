// render homepage
router.get("/", function(req, res) {
    res.render("home");   // view engine knows this is home.handlebars
});

// render saved page
router.get("/saved", function(req, res) {
    res.render("saved");  // view engine knows this is saved.handlebars
});

module.exports = router;