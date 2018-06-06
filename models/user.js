var bcrypt = require("bcrypt-nodejs");

module.exports = function (sequelize, DataTypes) {
  var User = sequelize.define("User", {
    // USERNAME
    username: {
      type: DataTypes.STRING,
      // can NOT be NULL
      allowNull: false,
      unique: true,
      // USERNAME must be min 3 characters and max 30 characters
      validate: {
        len: [3, 30]
      }
    },
    password: {
      type: DataTypes.STRING,
      // can NOT be NULL
      allowNull: false,
      // PASSWORD must be min 8 characters and max 16 characters
      validate: {
        len: [8, 16]
      }
    },
    email: {
      type: DataTypes.STRING,
      // can NOT be NULL
      allowNull: false,
      unique: true,
      // EMAIL must be in the format (foo@bar.com)
      validate: {
        isEmail: true
      }
    },

    // **** CAN BE NULL ****
    phone: {
      type: DataTypes.STRING
    },
    companyName: {
      type: DataTypes.STRING
    },
    website: {
      type: DataTypes.STRING,
      // WEBSITE must be in the format (http://foo.com)
      validate: {
        isUrl: true
      }
    }
  });
  // Creating a custom method for our User model. This will check if an unhashed password entered by the user can be compared to the hashed password stored in our database
  User.prototype.validPassword = function (password) {
    return bcrypt.compareSync(password, this.password);
  };
  // Hooks are automatic methods that run during various phases of the User Model lifecycle
  // In this case, before a User is created, we will automatically hash their password
  User.hook("beforeCreate", function (user) {
    user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10), null);
  });
  return User;
}