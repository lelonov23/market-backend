"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class FilterData extends Model {
    static associate(models) {
      this.hasMany(models.FilterValue, {
        foreignKey: "filterId",
        as: "value",
      });
      this.belongsTo(models.PresetFilter, {
        foreignKey: "filterId",
      });
    }
  }
  FilterData.init(
    {
      id: { type: DataTypes.INTEGER, primaryKey: true },
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
