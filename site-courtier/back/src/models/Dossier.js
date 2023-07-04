import { Sequelize, DataTypes } from 'sequelize';
import sequelize from '../config/db.config.js';
import User from './User.js';

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

Dossier.belongsTo(User, { foreignKey: 'id_User' });

export default Dossier;
