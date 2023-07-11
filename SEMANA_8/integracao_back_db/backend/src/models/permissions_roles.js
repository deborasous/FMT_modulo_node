const { DATE, INTEGER } = require('sequelize');
const { connection } = require('../database/connection');

const PermissionsRoles = connection.define(
  'permissionsRoles',
  {
    rolesId: {
      type: INTEGER,
      references: {
        model: 'roles',
        key: 'id',
      },
    },
    permissionId: {
      type: INTEGER,
      references: {
        model: 'permission',
        key: 'id',
      },
    },
    createdAt: DATE,
    updatedAt: DATE,
  },
  { underscored: true, paranoid: true }
);

module.exports = {
  PermissionsRoles,
};
