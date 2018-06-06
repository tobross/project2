var db = require("../models");
var passport = require("../config/passport");

module.exports = function(app) {

  // {
  //   "username": "usernameTest",
  //   "password": "password",
  //   "email": "foo@bar.com",
  //   "phone": "1234567890",
  //   "companyName": "Test Company Name",
  //   "website": "http://foobar.com"
  // }

  app.get("/api/users", function(req, res) {
    db.User.findAll({}).then(function(result) {
      res.json(result);
    });
  });

  // ********** TESTING **********

  app.post("/api/users", function(req, res) {
    db.User.create({
      username: req.body.username,
      password: req.body.password,
      email: req.body.email,
      phone: req.body.phone,
      companyName: req.body.companyName,
      website: req.body.website
    }).then(function(result){
      res.json(result);
    }).catch(function(err){
      console.log("ERROR " + err);
      res.json(err);
    });
  });

  // *****************************

}