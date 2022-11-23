"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "chapters",
      [
        {
          name: "welcome to bootcamp",
          chapter_index: 0,
          moduleId: 1,
          image_url:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Flag_of_the_First_Galactic_Empire.svg/600px-Flag_of_the_First_Galactic_Empire.svg.png",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "logistics",
          chapter_index: 0,
          moduleId: 2,
          image_url:
            "https://upload.wikimedia.org/wikipedia/en/8/87/StarWarsMoviePoster1977.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "general reference",
          chapter_index: 0,
          moduleId: 3,
          image_url:
            "https://upload.wikimedia.org/wikipedia/en/3/3f/The_Empire_Strikes_Back_%281980_film%29.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "foundations",
          chapter_index: 0,
          moduleId: 4,
          image_url:
            "https://upload.wikimedia.org/wikipedia/en/b/b2/ReturnOfTheJediPoster1983.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "command line",
          chapter_index: 1,
          moduleId: 4,
          image_url:
            "https://upload.wikimedia.org/wikipedia/en/4/40/Star_Wars_Phantom_Menace_poster.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "git",
          chapter_index: 2,
          moduleId: 4,
          image_url:
            "https://upload.wikimedia.org/wikipedia/en/3/32/Star_Wars_-_Episode_II_Attack_of_the_Clones_%28movie_poster%29.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "github",
          chapter_index: 3,
          moduleId: 4,
          image_url:
            "https://upload.wikimedia.org/wikipedia/en/9/93/Star_Wars_Episode_III_Revenge_of_the_Sith_poster.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "javascript",
          chapter_index: 4,
          moduleId: 4,
          image_url:
            "https://upload.wikimedia.org/wikipedia/en/a/a2/Star_Wars_The_Force_Awakens_Theatrical_Poster.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "nodejs",
          chapter_index: 5,
          moduleId: 4,
          image_url:
            "https://upload.wikimedia.org/wikipedia/en/7/7f/Star_Wars_The_Last_Jedi.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "frontend",
          chapter_index: 0,
          moduleId: 5,
          image_url:
            "https://upload.wikimedia.org/wikipedia/en/a/af/Star_Wars_The_Rise_of_Skywalker_poster.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "html",
          chapter_index: 1,
          moduleId: 5,
          image_url:
            "https://upload.wikimedia.org/wikipedia/en/d/d4/Rogue_One%2C_A_Star_Wars_Story_poster.png",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "css",
          chapter_index: 2,
          moduleId: 5,
          image_url:
            "https://upload.wikimedia.org/wikipedia/en/5/54/Solo_A_Star_Wars_Story_poster.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "layout",
          chapter_index: 3,
          moduleId: 5,
          image_url:
            "https://upload.wikimedia.org/wikipedia/en/7/72/Star_wars_the_clone_wars.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "react",
          chapter_index: 4,
          moduleId: 5,
          image_url:
            "https://upload.wikimedia.org/wikipedia/en/2/23/StarWarsHS.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "recipe site",
          chapter_index: 5,
          moduleId: 5,
          image_url:
            "https://upload.wikimedia.org/wikipedia/en/e/ec/Caravan_bg.jpeg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("chapters", null, {});
  },
};