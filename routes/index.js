// This file sends you to api routes, or view routes - which will render homepage or saved page
// Only need to use the router part of espress
var router = require("express").Router();
var apiRoutes = require("./api");
var viewRoutes = require("./view");

router.use("/api", apiRoutes);
router.use("/", viewRoutes);

module.exports = router;