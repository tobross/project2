module.exports = function (sequelize, DataTypes) {
  var Sponsor = sequelize.define("Sponsor", {
    message: {
      type: DataTypes.STRING
    }
  });

  Sponsor.associate = function (models) {
    Sponsor.belongsTo(models.User, {
      // foreignKey: {
      // allowNull: false
      // }
    });
    Sponsor.belongsTo(models.Event, {

    });
    Sponsor.belongsTo(models.Product, {

    });
  }
  return Sponsor;
}