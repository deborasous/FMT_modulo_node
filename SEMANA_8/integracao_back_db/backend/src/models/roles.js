const { STRING, DATE } = require('sequelize');
const { connection } = require('../database/connection');
const { User } = require('./users');
const { UserRoles } = require('./user_roles');

const Roles = connection.define(
  'roles',
  {
    description: STRING,
    createdAt: DATE,
    updatedAt: DATE,
    deletedAt: {
      type: DATE,
      defaultValue: null,
    },
  },
  { underscored: true, paranoid: true }
);

User.belongsToMany(Roles, { through: UserRoles });
Roles.belongsToMany(User, { through: UserRoles });

module.exports = {
  Roles,
};
