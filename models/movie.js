module.exports = (sequelize, DataTypes) => {
    const Movie = sequelize.define("movie", {
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      year: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      director: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      runtime: {
        type: DataTypes.INTEGER,
      },
      rating: {
        type: DataTypes.ENUM,
        values: ['NR', 'G', 'PG', 'PG-13', 'R', 'Unrated', 'NC-17'],
      },
      notes: {
          type: DataTypes.STRING,
      },
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      }
    });
    return Movie;
  };