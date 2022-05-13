"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Test extends Model {
    static associate(models) {
      // define association here
    }
  }
  Test.init(
    {
      test: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Test",
    }
  );
  return Test;
};
