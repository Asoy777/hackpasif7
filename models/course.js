'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Course extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Course.belongsTo(models.Category)
      Course.hasMany(models.UserCourse)
    }

    get durationHour() {
      return `${this.duration} jam`
    }

  }
  Course.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: `Name is required`
        },
        notNull: {
          msg: `Name is required`
        }
      }
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: `Description is required`
        },
        notNull: {
          msg: `Description is required`
        }
      }
    },
    duration: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: `Duration is required`
        },
        notNull: {
          msg: `Duration is required`
        }
      }
    },
    CategoryId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: `Please Select Category`
        },
        notNull: {
          msg: `Please Select Category`
        }
      }
    },
    startDate: {
      type: DataTypes.DATE,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: `Date is Required`
        },
        notNull: {
          msg: `Date is Required`
        }
      }
    },
    type: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: `Type is Required`
        },
        notNull: {
          msg: `Type is Required`
        }
      }
    },
    picture: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Course',
  });
  return Course;
};