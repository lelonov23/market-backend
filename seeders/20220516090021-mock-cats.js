"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Categories",
      [
        {
          id: "phones-and-gadgets",
          name: "Смартфоны и гаджеты",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "laptops-and-pc",
          name: "Ноутбуки и компьютеры",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "phone",
          name: "Смартфоны",
          type: "phone",
          categoryId: "phones-and-gadgets",
          img: "/img/phone-cat.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "tablet",
          name: "Планшеты",
          type: "tablet",
          categoryId: "phones-and-gadgets",
          img: "/img/tablet-cat.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "charger",
          name: "Зарядные устройства",
          type: "charger",
          categoryId: "phones-and-gadgets",
          img: "/img/charger-cat.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "laptop",
          name: "Ноутбуки",
          type: "laptop",
          categoryId: "laptops-and-pc",
          img: "/img/laptop-cat.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "pc",
          name: "Компьютеры",
          type: "pc",
          categoryId: "laptops-and-pc",
          img: "/img/pc-cat.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "monitor",
          name: "Мониторы",
          type: "monitor",
          categoryId: "laptops-and-pc",
          img: "/img/monitor-cat.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("Categories", null, {});
  },
};
