'use strict';
const {
  Model
} = require('sequelize');
const bcrypt = require('bcryptjs')

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasOne(models.UserProfile)
      User.hasMany(models.UserCourse)
    }
  }
  User.init({
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: `Please input your email`
        },
        notNull: {
          msg: `Please input your email`
        }
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: `Please input your password`
        },
        notNull: {
          msg: `Please input your password`
        }
      }
    },
    role: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });

  User.addHook('beforeCreate', (user, opt) => {
    const salt = bcrypt.genSaltSync(8)
    const hash = bcrypt.hashSync(user.password, salt)

    user.password = hash
  })

  return User;
};