const { STRING, DATE, INTEGER } = require('sequelize');
const { connection } = require('../database/connection');
const { Trainees } = require('./trainee');

const User = connection.define(
  'Users',
  {
    traineeId: {
      type: INTEGER,
      references: {
        model: { tablename: Trainees },
        key: 'id',
      },
      allowNull: true,
    },
    name: STRING,
    email: {
      type: STRING,
      validate: {
        isEmail: { msg: 'Email inválido.' },
      },
      unique: { msg: 'Email já existe' },
    },
    password: {
      type: STRING,
      validate: {
        len: { args: [8, 12], msg: 'Senha precisa ter mais de 8 caracteres' },
        is: {
          args: /^(?=.*[a-z])(?=.*\d)(?=.*[@$!%*#?&])[a-zA-Z\d@$!%*#?&]{8,12}$/,
          msg: 'Senha precisa incluir letras minúsculas, números e pelo menos um caractere especial',
        },
      },
    },

    createdAt: DATE,
    updatedAt: DATE,
  },
  { underscored: true, paranoid: true }
);

module.exports = {
  User,
};
