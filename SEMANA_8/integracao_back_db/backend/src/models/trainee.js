const { connection } = require('../database/connection');
const { STRING, DATE, BOOLEAN } = require('sequelize');

const Trainees = connection.define(
  'Trainees',
  {
    name: STRING,
    email: STRING,
    rg: {
      type: STRING,
      validate: {
        len: {
          args: [7, 20],
          msg: 'O Rg deve ter no mínimo 7 dígitos',
        },
      },
      unique: {
        msg: 'Este campo já está na aplicação',
      },
    },
    cpf: {
      type: STRING,
      validate: {
        len: {
          args: [11, 11],
          msg: 'Este campo deve ter exatamente 11 caracteres.',
        },
      },
      unique: {
        msg: 'Este campo já está na aplicação',
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
