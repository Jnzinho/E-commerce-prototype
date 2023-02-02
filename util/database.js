const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('node-complete', 'root', 'joao123joao', {
  dialect: 'mysql',
  host: 'localhost',
});

module.exports = sequelize;
