var passport = require("../config/passport");
var theRoute = "";

// Requiring our models
var db = require("../models");

module.exports = function (app) {

    app.post("/api/login", passport.authenticate("local", {
        failureRedirect: "/login-failureRedirect"
    }), function (req, res) {
        res.json(theRoute);
    });

    // Route for logging user out
    app.get("/logout", function (req, res) {
        req.logout();
        res.redirect("/");
    });
    
    app.get("/api/route-getter/:route", function(req, res) {
        theRoute = "/" + req.params.route;
        console.log("theRoute");
        console.log(theRoute);
        console.log("theRoute");
    });

}