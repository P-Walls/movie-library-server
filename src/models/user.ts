import * as sequelize from 'sequelize';

import db from '../config/database.config';
//const sequelize = new Sequelize(something here); and then all the Sequelize can be defined by 'Sequelize' again.

const User = db.define('user', {
  firstName: {
    type: sequelize.STRING,
    allowNull: false,
  },
  lastName: {
    type: sequelize.STRING,
    allowNull: false,
  },
  email: {
    type: sequelize.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: sequelize.STRING,
    allowNull: false,
  },
});
