var db = require("../models");
var passport = require("../config/passport");

module.exports = function(app) {

  // {
  //   "eventName": "Fun Time",
  //   "date": "2-2-20",
  //   "location": "1234 Hello Ln, Austin TX, 78730",
  //   "description": "Come have fun!"
  // }

  //I did not change this /api/login route. If it needs to lead to the signup page, it should be updated to /api/signup. - Katya
  // app.post("/api/login", passport.authenticate("local"), function(req, res) {
  //   res.json("/api/events");
  // });
  

  app.get("/api/events", function(req, res) {
    db.Event.findAll({}).then(function(result) {
      res.json(result);
    });
  });


  app.post("/api/events", function(req, res) {
    console.log(req.user);
    db.Event.create({
      // Look into a pointer in sequelize
      // UserId: current user id
      UserId: req.user.id,
      eventName: req.body.eventName,
      date: req.body.date,
      location: req.body.location,
      description: req.body.description
    }).then(function(result){
      res.json(result);
    }).catch(function(err) {
      console.log("ERROR " + err);
      res.json(err);
    })
  });
}