// Requiring in express and declaring the routings that need to be exported
var express = require("express");
var router = express.Router();

// Requiring in burger model
var burger = require("../models/burger");

// Route for main page
router.get("/", function (req, res) {
    burger.selectAll(function (data) {
        var hbsObject = {
            burgers: data
        };
        res.render("index", hbsObject);
    });
});

// Route for posting burgers
router.post("/newBurger", function (req, res) {
    burger.insertOne(req.body.burger_name, function (result) {
        res.json({id: result.insertId});
    });
});

router.post("/devour", function (req, res) {
    var condition = "id = " + req.body.id;
    var objColVal = {
        devoured: req.body.devoured
    };
    burger.updateOne(objColVal, condition, function (result) {
        res.json({id: result.insertId});
    });
});

// Export routes for server.js to use.
module.exports = router;