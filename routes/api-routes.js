var passport = require("../config/passport");

// Requiring our models
var db = require("../models");

module.exports = function(app) {

  app.post("/api/login", passport.authenticate("local", {
    failureRedirect: "/login-failureRedirect"
}), function(req, res) {
    console.log(req.user.id);
    res.json("/");
});

}