import * as sequelize from 'sequelize';

import db from '../config/database.config';
//const sequelize = new Sequelize(something here); and then all the datatypes can be defined by 'DataTypes' again.

const Movie = db.define('movie', {
  title: {
    type: sequelize.STRING,
    allowNull: false,
  },
  releaseDate: {
    type: sequelize.DATEONLY,
    allowNull: false,
  },
  director: {
    type: sequelize.STRING,
    allowNull: false,
  },
  runtime: {
    type: sequelize.INTEGER,
  },
  rating: {
    type: sequelize.ENUM,
    values: ['NR', 'G', 'PG', 'PG-13', 'R', 'Unrated', 'NC-17'],
  },
  budget: {
    type: sequelize.INTEGER,
  },
  // productionCompanies: {

  // },
  notes: {
    type: sequelize.STRING,
  },
  // userId: {
  //   type: sequelize.INTEGER,
  //   allowNull: false,
  // },
});
