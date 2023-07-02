const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../db.config.js');
const Client = require('./Client.js');

const Dossier = sequelize.define('Dossier', {
  Id_Dossier: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
}, {
  tableName: 'Dossier',
  timestamps: false
});

Dossier.belongsTo(Client, { foreignKey: 'id_Client' });

module.exports = Dossier;
