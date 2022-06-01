"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("categories", [
      {
        name: "Main",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "Drinks",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "Sides",
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
