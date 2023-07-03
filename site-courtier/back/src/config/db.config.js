// const Sequelize = require('sequelize');

// module.exports = {
//     HOST: "localhost",
//     USER: "root",
//     PASSWORD: "root",
//     DB: "solution_factory",
//     dialect: "mysql"
// }


import { Sequelize } from 'sequelize';
//Il faut modifier le mot de passe selon le mot de passe de MySqlWorkBench sur vos machine.
//Remplacez ou y a le texte: iTunes101020
const sequelize = new Sequelize('solution_factory', 'root', 'iTunes101020', {
  host: 'localhost',
  dialect: 'mysql',
});

export default sequelize;
