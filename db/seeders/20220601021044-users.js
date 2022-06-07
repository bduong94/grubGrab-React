"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("users", [
      {
        role_id: 1,
        email: "testadmin@test.com",
        password: "test123",
        name: "Brian",
        surname: "Duong",
        address: "123 Test Street",
        city: "Toronto",
        province: "Ontario",
        postal_code: "A9A9A9",
        phone_number: "123-456-7890",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        role_id: 2,
        email: "testuser@test.com",
        password: "test123",
        name: "Tony",
        surname: "Chopper",
        address: "123 Test Street",
        city: "Toronto",
        province: "Ontario",
        postal_code: "A9A9A9",
        phone_number: "123-456-7890",
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
