const { connection } = require('../database/connection');
const { STRING, DATE, BOOLEAN, INTEGER } = require('sequelize');

const Trainees = connection.define(
  'Trainees',
  {
    name: {
      type: STRING,
    },
    email: {
      type: STRING,
      validate: {
        isEmail: {
          msg: 'E-mail inválido.',
        },
      },
      unique: { msg: 'E-mail já cadatrado' },
    },
    rg: {
      type: STRING,
      validate: {
        len: {
          args: [7, 20],
          msg: 'O RG deve ter no mínimo 7 dígitos',
        },
      },
      unique: {
        msg: 'RG já cadatrado',
      },
    },
    cpf: {
      type: STRING,
      validate: {
        len: {
          args: [11, 11],
          msg: 'CPF deve ter exatamente 11 caracteres.',
        },
      },
      unique: {
        msg: 'CPF já cadatrado',
      },
    },
    primaryPhoneContact: STRING,
    secondaryPhoneContact: {
      type: STRING,
      allowNull: true,
    },
    dateBirth: DATE,
    fatherName: STRING,
    motherName: STRING,
    haveSpecialNeeds: BOOLEAN,
    createdAt: DATE,
    updatedAt: DATE,
  },
  { underscored: true, paranoid: true }
);

module.exports = {
  Trainees,
};
