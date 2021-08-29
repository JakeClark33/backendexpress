const Sequelize = require('sequelize');

require('dotenv').config();


// create connection to our database, pass in your MySQL information for username and password
const sequelize = new Sequelize(process.env.backendexpress, process.env.username, process.env.password, {
  host: 'localhost',
  dialect: 'mysql',
  port: 3306
});

module.exports = sequelize;