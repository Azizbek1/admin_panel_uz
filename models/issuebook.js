'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class issuebook extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  issuebook.init({
    bookid: DataTypes.INTEGER,
    userid: DataTypes.INTEGER,
    days_issued: DataTypes.INTEGER,
    issued_date: DataTypes.DATE,
    is_returnd: DataTypes.ENUM,
    returned_date: DataTypes.DATE,
    status: DataTypes.ENUM
  }, {
    sequelize,
    modelName: 'issuebook',
  });
  return issuebook;
};