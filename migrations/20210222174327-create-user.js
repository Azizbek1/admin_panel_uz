'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },
      email: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },
      mobile: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },
      gender: {
        type: Sequelize.ENUM('0', '1'),
        defaultValue: '1'
      },
      adress: {
        type: Sequelize.TEXT(255),
        allowNull: false
      },
      status: {
        type: Sequelize.ENUM('0', '1'),
        defaultValue: '1'
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('users');
  }
};