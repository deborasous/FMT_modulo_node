const { STRING, DATE } = require('sequelize');
const { connection } = require('../database/connection');
const { PermissionsRoles } = require('./permissions_roles');
const { Roles } = require('../models/roles')

const Permission = connection.define(
  'Permission',
  {
    description: {
      type: STRING,
      validate: {
        len: { arg: [1, 120] },
      },
      unique: { msg: 'Essa descrição já existe.' },
    },
    createdAt: DATE,
    updatedAt: DATE,
  },
  { underscored: true, paranoid: true }
);

Permission.belongsToMany(Roles, {
  through: PermissionsRoles,
});
Roles.belongsToMany(Permission, {
  through: PermissionsRoles,
});

module.exports = {
  Permission,
};
