const Sequelize = require("sequelize");
const sequelize = new Sequelize(
    "media-library",
    "postgres",
    process.env.PASS,
    {
        host: "localhost",
        dialect: "postgres", //need to decide between MySQL and PG for DB
    }
);

sequelize.authenticate().then(
    function () {
        console.log("Connected to media-library postgres database");
    },
    function (err) {
        console.log(err);
    }
);

module.exports = sequelize;