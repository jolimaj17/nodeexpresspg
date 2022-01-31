const Sequelize = require("sequelize");

const connectDB = new Sequelize('kshop', 'postgres', 'jj', {
  host: '127.0.0.1',
  dialect: 'postgres'
});

module.exports = connectDB;