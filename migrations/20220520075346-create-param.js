"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Params", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      productId: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      type: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      display: Sequelize.STRING,
      os: Sequelize.STRING,
      battery: Sequelize.STRING,
      resolution: Sequelize.STRING,
      processor: Sequelize.STRING,
      screenSize: Sequelize.STRING,
      laptopType: Sequelize.STRING,
      brand: Sequelize.STRING,
      port: Sequelize.STRING,
      chargerType: Sequelize.STRING,
      graphics: Sequelize.STRING,
      matrix: Sequelize.STRING,
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Params");
  },
};
