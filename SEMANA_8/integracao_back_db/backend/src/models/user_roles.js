const { DATE, INTEGER } = require('sequelize');
const { connection } = require('../database/connection');

const UserRoles = connection.define(
  'UserRoles',
  {
    userId: {
      type: INTEGER,
      references: {
        model: 'users',
        key: 'id',
      },
    },
    rolesId: {
      type: INTEGER,
      references: {
        model: 'roles',
        key: 'id',
      },
    },
    createdAt: DATE,
    updatedAt: DATE,
  },
  { underscored: true, paranoid: true }
);

module.exports = {
  UserRoles,
};
