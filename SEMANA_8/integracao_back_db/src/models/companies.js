const connection = require('../database/connection');
const { STRING, DATE } = require('sequelize');

const Companies = connection.define(
  'Companies',
  {
    name: STRING,
    createAt: DATE,
    updatedAt: DATE,
  },
  {
    underscored: true,
  }
);

module.exports = {
  Companies,
};
