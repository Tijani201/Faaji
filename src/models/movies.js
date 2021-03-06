'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Movies extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Movies.init({
    title: DataTypes.STRING,
    country: DataTypes.STRING,
    genre: DataTypes.STRING,
    stars: DataTypes.STRING,
    language: DataTypes.STRING,
    release_date: DataTypes.INTEGER,
    short_desc: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Movies',
  });
  return Movies;
};