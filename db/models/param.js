"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Param extends Model {
    static associate(models) {}
  }
  Param.init(
    {
      productId: {
        type: DataTypes.INTEGER,
      },
      type: {
        type: DataTypes.STRING,
      },
      display: {
        type: DataTypes.STRING,
        allowNull: true,
        get() {
          return this.getDataValue("display") || undefined;
        },
      },
      os: {
        type: DataTypes.STRING,
        allowNull: true,
        get() {
          return this.getDataValue("os") || undefined;
        },
      },
      battery: {
        type: DataTypes.STRING,
        allowNull: true,
        get() {
          return this.getDataValue("battery") || undefined;
        },
      },
      resolution: {
        type: DataTypes.STRING,
        allowNull: true,
        get() {
          return this.getDataValue("resolution") || undefined;
        },
      },
      processor: {
        type: DataTypes.STRING,
        allowNull: true,
        get() {
          return this.getDataValue("processor") || undefined;
        },
      },
      screenSize: {
        type: DataTypes.STRING,
        allowNull: true,
        get() {
          return this.getDataValue("screenSize") || undefined;
        },
      },
      laptopType: {
        type: DataTypes.STRING,
        allowNull: true,
        get() {
          return this.getDataValue("laptopType") || undefined;
        },
      },
      brand: {
        type: DataTypes.STRING,
        allowNull: true,
        get() {
          return this.getDataValue("brand") || undefined;
        },
      },
      port: {
        type: DataTypes.STRING,
        allowNull: true,
        get() {
          return this.getDataValue("port") || undefined;
        },
      },
      chargerType: {
        type: DataTypes.STRING,
        allowNull: true,
        get() {
          return this.getDataValue("chargerType") || undefined;
        },
      },
      graphics: {
        type: DataTypes.STRING,
        allowNull: true,
        get() {
          return this.getDataValue("graphics") || undefined;
        },
      },
      matrix: {
        type: DataTypes.STRING,
        allowNull: true,
        get() {
          return this.getDataValue("matrix") || undefined;
        },
      },
    },
    {
      sequelize,
      modelName: "Param",
    }
  );
  return Param;
};
