import { Sequelize, DataTypes } from 'sequelize';
import sequelize from '../config/db.config.js';

const Client = sequelize.define('Client', {
  id_Client: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  nom: DataTypes.STRING,
  mail: DataTypes.STRING,
  login: DataTypes.STRING,
  password: DataTypes.STRING,
  telephone: DataTypes.INTEGER,
  prenom: DataTypes.STRING,
  userType: DataTypes.INTEGER
}, {
  tableName: 'Clients',
  timestamps: false
});

export default Client;
