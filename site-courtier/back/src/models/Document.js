const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../db.config.js');
const Dossier = require('./Dossier.js');

const Document = sequelize.define('Document', {
  id_Documents: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  file_name: DataTypes.STRING,
  file_size: DataTypes.STRING,
  file_type: DataTypes.STRING,
  file_data: DataTypes.BLOB
}, {
  tableName: 'Documents',
  timestamps: false
});

Document.belongsTo(Dossier, { foreignKey: 'Id_Dossier' });

module.exports = Document;
