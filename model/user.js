const { DataTypes } = require('sequelize');
const db = require('../db/conn');

const User = db.define('User', {
  name: {
    type: DataTypes.STRING,
    required: true,
  },
  age: {
    type: DataTypes.INTEGER,
    required: true,
  }
})

module.exports = User;