module.exports = (function (sequelize, DataTypes) {
  var Product = sequelize.define("Product", {
    vendorName: {
      type: DataTypes.STRING
    },
    productName: {
      type: DataTypes.STRING
    },
    description: {
      type: DataTypes.STRING
    }
  });

  Product.associate = function (models) {
    Product.belongsTo(models.User, {
      // foreignKey: {
      // allowNull: false
      // }
    });
  }
  return Product;
});