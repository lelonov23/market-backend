"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class PresetFilter extends Model {
    static associate(models) {
      this.belongsTo(models.Category, {
        foreignKey: "categoryId",
      });
      this.hasMany(models.FilterData, {
        as: "filters",
        foreignKey: "filterId",
      });
    }
  }
  PresetFilter.init(
    {
      id: { type: DataTypes.INTEGER, primaryKey: true },
      name: DataTypes.STRING,
      categoryId: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "PresetFilter",
    }
  );
  return PresetFilter;
};
