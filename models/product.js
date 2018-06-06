var bcrypt = require("bcrypt-nodejs");

module.exports = (function(sequelize, DataTypes) {
  var Product = sequelize.define("Product", {
    productName: {
      type: DataTypes.STRING
    },
    category: {
      type: DataTypes.STRING
    },
    description: {
      type: DataTypes.STRING
    }
  });
  return Product;
});