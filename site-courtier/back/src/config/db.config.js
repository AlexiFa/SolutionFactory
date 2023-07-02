// const Sequelize = require('sequelize');

// module.exports = {
//     HOST: "localhost",
//     USER: "root",
//     PASSWORD: "root",
//     DB: "solution_factory",
//     dialect: "mysql"
// }


const Sequelize = require('sequelize');

const sequelize = new Sequelize('solution_factory', 'root', 'root', {
  host: 'localhost',
  dialect: 'mysql',
});

module.exports = sequelize;
