// const Sequelize = require('sequelize');

// module.exports = {
//     HOST: "localhost",
//     USER: "root",
//     PASSWORD: "root",
//     DB: "solution_factory",
//     dialect: "mysql"
// }


import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('solution_factory', 'root', 'root', {
  host: 'localhost',
  dialect: 'mysql',
});

export default sequelize;
