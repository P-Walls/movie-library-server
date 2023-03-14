import Sequelize = require('sequelize');

import sequelize from '../util/db';
//const sequelize = new Sequelize(something here); and then all the Sequelize can be defined by 'Sequelize' again.

const User = sequelize.define('user', {
  firstName: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  lastName: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});
