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
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
    duration: DataTypes.INTEGER,
    CategoryId: DataTypes.INTEGER,
    picture: DataTypes.STRING,
    startDate: DataTypes.DATE,
    type: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Course',
  });
  return Course;
};