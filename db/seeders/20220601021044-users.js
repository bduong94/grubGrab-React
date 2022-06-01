"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("users", [
      {
        role_id: 1,
        email: "testcustomer@test.com",
        password: "test123",
        name: "Brian",
        surname: "Duong",
        address: "123 Test Street",
        city: "Toronto",
        country: "Canada",
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
