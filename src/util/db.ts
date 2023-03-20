import * as sequelize from 'sequelize';

const db = new sequelize.Sequelize({
    database: 'media-library',
    dialect: 'postgres',
    username: 'postgres',
    password: process.env.PASS,
    host: 'localhost',
  });
  

db.authenticate().then(
  function () {
    console.log('Connected to media-library postgres database');
  },
  function (err: string) {
    console.log(err);
  }
);

export default db;