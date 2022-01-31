const Sequelize = require("sequelize");
const { DataTypes } = Sequelize;

const connectDB = require("../database/db_config");

const Product = connectDB.define('products', {
  name: {
    type:DataTypes.STRING
  },
  price: {
    type:DataTypes.INTEGER
  },
  quantity: {
    type:DataTypes.INTEGER
  },
  color: {
    type:DataTypes.STRING
  },
});

module.exports = Product;