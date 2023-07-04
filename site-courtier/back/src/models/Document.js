import { Sequelize, DataTypes } from 'sequelize';
import sequelize from '../config/db.config.js';
import Dossier from './Dossier.js';

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

Dossier.hasMany(Document, { foreignKey: 'Id_Dossier' });
Document.belongsTo(Dossier, { foreignKey: 'Id_Dossier' });

export default Document;
