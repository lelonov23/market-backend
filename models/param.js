"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Param extends Model {
    static associate(models) {
      // define association here
    }
  }
  Param.init(
    {
      productId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      type: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      display: {
        type: DataTypes.STRING,
        allowNull: true,
        get() {
          if (!this.getDataValue("display")) return;
          return this.getDataValue("display");
        },
      },
      os: {
        type: DataTypes.STRING,
        allowNull: true,
        get() {
          if (!this.getDataValue("os")) return;
          return this.getDataValue("os");
        },
      },
      battery: {
        type: DataTypes.STRING,
        allowNull: true,
        get() {
          if (!this.getDataValue("battery")) return;
          return this.getDataValue("battery");
        },
      },
      resolution: {
        type: DataTypes.STRING,
        allowNull: true,
        get() {
          if (!this.getDataValue("resolution")) return;
          return this.getDataValue("resolution");
        },
      },
      processor: {
        type: DataTypes.STRING,
        allowNull: true,
        get() {
          if (!this.getDataValue("processor")) return;
          return this.getDataValue("processor");
        },
      },
      screenSize: {
        type: DataTypes.STRING,
        allowNull: true,
        get() {
          if (!this.getDataValue("screenSize")) return;
          return this.getDataValue("screenSize");
        },
      },
      laptopType: {
        type: DataTypes.STRING,
        allowNull: true,
        get() {
          if (!this.getDataValue("laptopType")) return;
          return this.getDataValue("laptopType");
        },
      },
      brand: {
        type: DataTypes.STRING,
        allowNull: true,
        get() {
          if (!this.getDataValue("brand")) return;
          return this.getDataValue("brand");
        },
      },
      port: {
        type: DataTypes.STRING,
        allowNull: true,
        get() {
          if (!this.getDataValue("port")) return;
          return this.getDataValue("port");
        },
      },
      chargerType: {
        type: DataTypes.STRING,
        allowNull: true,
        get() {
          if (!this.getDataValue("chargerType")) return;
          return this.getDataValue("chargerType");
        },
      },
      graphics: {
        type: DataTypes.STRING,
        allowNull: true,
        get() {
          if (!this.getDataValue("graphics")) return;
          return this.getDataValue("graphics");
        },
      },
      matrix: {
        type: DataTypes.STRING,
        allowNull: true,
        get() {
          if (!this.getDataValue("matrix")) return;
          return this.getDataValue("matrix");
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
