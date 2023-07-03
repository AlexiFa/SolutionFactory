import { Sequelize, DataTypes } from 'sequelize';
import sequelize from '../config/db.config.js';
import User from './Client.js';

const Message = sequelize.define('Message', {
  id_Message: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  message: DataTypes.STRING,
  dateMessage: DataTypes.DATE
}, {
  tableName: 'Messages',
  timestamps: false
});

Message.belongsTo(User, { foreignKey: 'id_User' });

export default Message;
