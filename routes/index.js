var express = require("express");
var router = express.Router();
//module.exports = function(router) {
    //var apiRoutes = require("./api");
    var viewRoutes = require("./view");

    //router.use("/api", apiRoutes);
    router.use("/", viewRoutes);
//}
module.export = router;