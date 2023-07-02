import { Sequelize, DataTypes } from 'sequelize';
import sequelize from '../config/db.config.js';
import Client from './Client.js';

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

export default Dossier;
