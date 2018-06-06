var path = require("path");

module.exports = function(app) {

  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../htmlPages/landing.html"));
  });

  app.get("/login", function(req, res) {
    res.sendFile(path.join(__dirname, "../htmlPages/login.html"));
  });
}