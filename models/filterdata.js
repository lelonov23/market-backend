"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class FilterData extends Model {
    static associate(models) {
      this.hasMany(models.FilterValue, {
        foreignKey: "filterId",
      });
    }
  }
  FilterData.init(
    {
      id: DataTypes.INTEGER,
      name: DataTypes.STRING,
      filterId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "FilterData",
    }
  );
  return FilterData;
};
