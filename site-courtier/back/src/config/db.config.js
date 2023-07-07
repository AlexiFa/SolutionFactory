import { Sequelize } from 'sequelize';
//Il faut modifier le mot de passe selon le mot de passe de MySqlWorkBench sur vos machine.
//Remplacez ou y a le texte: iTunes101020
const sequelize = new Sequelize('solution_factory', 'root', 'iTunes101020', {
  host: '127.0.0.1',
  dialect: 'mysql',
});

export default sequelize;