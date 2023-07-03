import { Sequelize } from 'sequelize';
import sequelize from '../config/db.config.js';

const Address = sequelize.define('address', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    address1: {
        type: Sequelize.STRING
    },
    address2: {
        type: Sequelize.STRING
    },
    city: {
        type: Sequelize.STRING
    },
    department: {
        type: Sequelize.STRING
    },
    postalCode: {
        type: Sequelize.STRING
    },
}, {
    timestamps: false
});

export default Address;
