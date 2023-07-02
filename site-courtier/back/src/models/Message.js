const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../db.config.js');
const Client = require('./Client.js');

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

Message.belongsTo(Client, { foreignKey: 'id_Client' });

module.exports = Message;
