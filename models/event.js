module.exports = function (sequelize, DataTypes) {
  var Event = sequelize.define("Event", {
    eventName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    date: {
      type: DataTypes.STRING,
      allowNull: false
    },
    location: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  });

  Event.associate = function (models) {
    Event.belongsTo(models.User, {
      // foreignKey: {
      // allowNull: false
      // }
    });
  }
  return Event;
};