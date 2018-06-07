var path = require("path");

var isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function(app) {

  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../htmlPages/landing.html"));
  });

  app.get("/login", function(req, res) {
    res.sendFile(path.join(__dirname, "../htmlPages/login.html"));
  });

  app.get("/signup", function(req, res) {
    res.sendFile(path.join(__dirname, "../htmlPages/signup.html"));
  });

  // ***** REQUIRES LOGIN *****

  app.get("/event", isAuthenticated, function(req, res) {
    res.sendFile(path.join(__dirname, "../htmlPages/event.html"));
  });

  app.get("/vendor", isAuthenticated, function(req, res) {
    res.sendFile(path.join(__dirname, "../htmlPages/vendor.html"));
  });

  app.get("/all-events", isAuthenticated, function(req, res) {
    res.sendFile(path.join(__dirname, "../htmlPages/all-events.html"));
  });
}