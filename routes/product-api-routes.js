var db = require("../models");
var passport = require("../config/passport");

module.exports = function(app) {

  app.get("/api/products", function(req, res) {
    db.Product.findAll({}).then(function(result) {
      res.json(result);
    });
  });

  app.post("/api/products", function(req, res) {

    db.Product.create({
      UserId: req.user.id,
      vendorName: req.body.vendorName,
      productName: req.body.productName,
      category: req.body.category,
      description: req.body.description
    }).then(function(result) {
      res.json(result);
    }).catch(function(err) {
      console.log(err);
      res.json(err);
    });
  });

}
