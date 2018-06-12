var db = require("../models");
var passport = require("../config/passport");

module.exports = function(app) {

  app.get("/api/all-events", function (req, res) {
    var currentUserId = req.user.id;
    db.Event.findAll({
      where: {
        UserId: currentUserId
      }
    }).then(function (results) {
      var resObj = {};
      resObj.userId = req.user.id;
      resObj.ResultsArr = results;
      res.json(resObj);
    });
  });

}