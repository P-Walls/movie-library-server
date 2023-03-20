import * as sequelize from 'sequelize';

import db from '../util/db';
//const sequelize = new Sequelize(something here); and then all the datatypes can be defined by 'DataTypes' again. 

const Movie = db.define('movie', {
  title: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  releaseDate: {
    type: Sequelize.DATEONLY,
    allowNull: false,
  },
  director: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  runtime: {
    type: Sequelize.INTEGER,
  },
  rating: {
    type: Sequelize.ENUM,
    values: ['NR', 'G', 'PG', 'PG-13', 'R', 'Unrated', 'NC-17'],
  },
  budget: {
    type: Sequelize.INTEGER,
  },
  // productionCompanies: {

  // },
  notes: {
    type: Sequelize.STRING,
  },
  // userId: {
  //   type: Sequelize.INTEGER,
  //   allowNull: false,
  // },
});
