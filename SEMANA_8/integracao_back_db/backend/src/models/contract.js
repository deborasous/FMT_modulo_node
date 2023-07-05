const { DATE, INTEGER, DATEONLY, BOOLEAN, FLOAT } = require('sequelize');
const { connection } = require('../database/connection');
const { Trainees } = require('./trainee');
const { Category } = require('./category');
const { Companies } = require('./companies');

const Contract = connection.define(
  'Contract',
  {
    traineeId: {
      type: INTEGER,
      references: {
        model: Trainees,
        key: 'id',
      },
    },
    categoryId: {
      type: INTEGER,
      references: {
        model: Category,
        key: 'id',
      },
    },
    companyId: {
      type: INTEGER,
      references: {
        model: Companies,
        key: 'id',
      },
    },
    startValidity: DATEONLY,
    endValidity: {
      type: DATEONLY,
      allowNull: true,
    },
    status: BOOLEAN,
    remuneration: FLOAT,
    extra: FLOAT,
    createdAt: DATE,
    updatedAt: DATE,
  },
  { underscored: true, paranoid: true }
);

Contract.belongsTo(Trainees);
Contract.belongsTo(Category);
Contract.belongsTo(Companies);

module.exports = { Contract };
