"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Category extends Model {
    static associate(models) {
      this.hasMany(models.PresetFilter, {
        foreignKey: "categoryId",
        as: "filters",
        required: false,
      });
      this.hasMany(models.Category, {
        foreignKey: "categoryId",
      });
      this.belongsTo(models.Category, {
        foreignKey: "categoryId",
      });
      this.hasMany(models.Product, {
        foreignKey: "categoryId",
      });
    }
  }
  Category.init(
    {
      id: {
        type: DataTypes.STRING,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      categoryId: {
        type: DataTypes.STRING,
        allowNull: true,
        get() {
          return this.getDataValue("categoryId") || undefined;
        },
      },
      type: {
        type: DataTypes.STRING,
        allowNull: true,
        get() {
          return this.getDataValue("type") || undefined;
        },
      },
      img: {
        type: DataTypes.STRING,
        allowNull: true,
        get() {
          return this.getDataValue("img") || undefined;
        },
      },
    },
    {
      sequelize,
      modelName: "Category",
    }
  );
  return Category;
};
