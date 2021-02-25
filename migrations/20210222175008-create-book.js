'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('books', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING(100),
        allowNull: false
      },
      categoryid: {
        type: Sequelize.INTEGER,
        references:{
           model:{
              tableName: 'categories'
           },
           key: "id",
        },
       
        allowNull: false
      },
      description: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      amount: {
        type: Sequelize.INTEGER(11),
        allowNull: false
      },
      cover_image: {
        type: Sequelize.STRING(220),
        allowNull: false
      },
      author: {
        type: Sequelize.STRING(100),
        allowNull: true
      },
      status: {
        type: Sequelize.ENUM('1', '0'),
        defaultValue: '1'
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP")
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP")
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('books');
  }
};