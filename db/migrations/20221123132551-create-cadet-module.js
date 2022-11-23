"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("cadet_modules", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      cadetId: {
        type: Sequelize.INTEGER,
        references: {
          model: "cadets",
          key: "id",
        },
      },
      moduleId: {
        type: Sequelize.INTEGER,
        references: {
          model: "modules",
          key: "id",
        },
      },
      completed: {
        type: Sequelize.BOOLEAN,
      },
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
    await queryInterface.dropTable("cadet_modules");
  },
};