const connection = require('../database/connection');
const { STRING, DATE } = require('sequelize');

const Trainees = connection.define(
  'Trainees',
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
  Trainees,
};
