import { Sequelize, DataTypes } from 'sequelize';
import sequelize from '../config/db.config.js';

const User = sequelize.define('User', {
  id_User: {
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
  tableName: 'Users',
  timestamps: false
});

export default User;
