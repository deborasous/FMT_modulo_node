const { connection } = require('../database/connection');
const { DATE, FLOAT, DATEONLY, BOOLEAN } = require('sequelize');
const { Trainee } = require('./trainee');
const { Category } = require('./category');
const { Company } = require('./companies');

const Contract = connection.define(
  'Contract',
  {
    trainee_id: {
      type: INTEGER,
      references: {
        model: Trainee,
        key: 'id',
      },
    },
    category_id: {
      type: INTEGER,
      references: {
        model: Category,
        key: 'id',
      },
    },
    company_id: {
      type: INTEGER,
      references: {
        model: Company,
        key: 'id',
      },
    },
    start_validity: DATEONLY,
    end_validity: DATEONLY,
    status: BOOLEAN,
    remuneration: FLOAT,
    extra: FLOAT,
    created_at: DATE,
    updated_at: DATE,
  },
  { underscored: true, paranoid: true }
);

Contract.belongsTo(Trainee);
Contract.belongsTo(Category);
Contract.belongsTo(Company);

module.exports = { Contract };
