"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("menu_items", [
      {
        category_id: 3,
        name: "Nachos",
        price: 399,
        description: "Nachos with Cheese",
        image_url:
          "https://www.seriouseats.com/thmb/tntNdOAMuxyGZHrYR3YZeO0k7Lo=/1500x1125/filters:fill(auto,1)/cheese-sauce-for-cheese-fries-and-nachos-hero-01-e6ccf966688c43ec8025cf9a19678423.jpg",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        category_id: 1,
        name: "Hot Dog",
        price: 699,
        description: "Hot Dog with a Bun",
        image_url:
          "https://www.thespruceeats.com/thmb/dQw3N0LrUbNNrjqAwwIaa2u_7l0=/3000x1687/smart/filters:no_upscale()/homemade-hot-dogs-1808491-final-01-ddf78878cb784ccdb617a2ae31674b75.jpg",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        category_id: 1,
        name: "Burger",
        price: 699,
        description: "Patty in between two buns",
        image_url:
          "https://tmbidigitalassetsazure.blob.core.windows.net/rms3-prod/attachments/37/1200x1200/Smash-Burgers_EXPS_TOHcom20_246232_B10_06_10b.jpg",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        category_id: 1,
        name: "Tacos",
        price: 599,
        description: "Not Taco Bell",
        image_url:
          "https://www.thewholesomedish.com/wp-content/uploads/2019/06/The-Best-Classic-Tacos-550.jpg",
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
