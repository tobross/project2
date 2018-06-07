var passport = require("../config/passport");

// Requiring our models
var db = require("../models");

module.exports = function (app) {

    app.post("/api/login", passport.authenticate("local", {
        failureRedirect: "/login-failureRedirect"
    }), function (req, res) {
        console.log(req.user.id);
        res.json("/");
    });

    // Route for logging user out
    app.get("/logout", function (req, res) {
        req.logout();
        res.redirect("/");
    });

}