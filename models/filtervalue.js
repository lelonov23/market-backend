"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class FilterValue extends Model {
    static associate(models) {
      this.belongsTo(models.FilterData, {
        foreignKey: "filterId",
      });
    }
  }
  FilterValue.init(
    {
      value: DataTypes.STRING,
      filterId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "FilterValue",
    }
  );
  return FilterValue;
};
