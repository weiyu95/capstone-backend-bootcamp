"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "cadetChapters",
      [
        {
          cadetId: 1,
          chapterId: 1,
          completed: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          cadetId: 1,
          chapterId: 2,
          completed: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          cadetId: 2,
          chapterId: 1,
          completed: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          cadetId: 3,
          chapterId: 1,
          completed: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("cadetChapters", null, {});
  },
};