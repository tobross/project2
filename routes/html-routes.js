var path = require("path");

module.exports = function(app) {

  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../htmlPages/landing.html"));
  });

  app.get("/event", function(req, res) {
    res.sendFile(path.join(__dirname, "../htmlPages/event.html"));
  });

  app.get("/vendor", function(req, res) {
    res.sendFile(path.join(__dirname, "../htmlPages/vendor.html"));
  });

  app.get("/signup", function(req, res) {
    res.sendFile(path.join(__dirname, "../htmlPages/signup.html"));
  });
}